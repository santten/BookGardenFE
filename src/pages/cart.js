import React, { useState, useEffect } from 'react';  
import { toast } from 'react-toastify';
import CartHeading from '../components/shoppingcart/CartHeading';
import ShoppingCartItem from '../components/shoppingcart/ShoppingCartItem';
import CartSummary from '../components/shoppingcart/CartSummary';
import './cartPage.css';

function Cart() {

  const [cartItems, setCartItems] = useState([]);  
  const apiurl = process.env.REACT_APP_API_URL;  
  const token = JSON.parse(localStorage.getItem('token'));
  const userId = JSON.parse(localStorage.getItem('userId'));
  console.log('Token being sent:', token); 

  // Get all of the shopping cart items 
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!token) {
        toast.error('Please login.');
        return;
      }
      try {
        const response = await fetch(`${apiurl}/api/cart`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        console.log('Fetched cart items:', data);
        setCartItems(data.products);   
      } catch (error) {
        console.error('Error fetching cart items:', error);
        toast.error('Failed to load cart items');
      }
    };
    fetchCartItems();
  }, [apiurl, token]);

  // Add the cart item quantity
  const handleAdd = (item) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.book._id === item.book._id
          ? { ...cartItem, quantity: Number(cartItem.quantity) + 1 }
          : cartItem
      )
    );

    fetch(`${apiurl}/api/cart/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: item.book._id,   
        quantity: item.quantity + 1  
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Updated cart item:', data);  
    })
    .catch(error => {
      console.error('Error updating cart item:', error);
    });
  };

  // Remove the item or decrease quantity if more than 1
  const handleRemove = (item) => {
    if (item.quantity <= 1) {
      handleDelete(item);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.book._id === item.book._id
          ? { ...cartItem, quantity: Number(cartItem.quantity) - 1 }
          : cartItem
      )
    );

    fetch(`${apiurl}/api/cart/reduce`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: item.book._id,   
        quantity: item.quantity - 1   
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Updated cart item:', data);  
    })
    .catch(error => {
      console.error('Error updating cart item:', error);
    });
  };

  // Delete the item
  const handleDelete = (item) => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.book._id !== item.book._id));

    fetch(`${apiurl}/api/cart/remove`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: item.book._id  
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        console.error('Error removing item from cart:', data.error);
        toast.error('Failed to remove item from cart');
      } else {
        console.log('Item removed from cart:', data);
        toast.success('Item successfully removed');
      }
    })
    .catch(error => {
      console.error('Error removing item from cart:', error);
      toast.error('Failed to remove item from cart');
    });
};

  // Calculate the quantity of all items
  const totalItems = cartItems.reduce((total, item) => {
    const quantity = item.quantity ? Number(item.quantity) : 0;  
    return total + quantity;
  }, 0);

  // Calculate the price of all items
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.book.price);   
    const quantity = item.quantity ? Number(item.quantity) : 0;   
    return total + (quantity * price);   
  }, 0);

  return (
    <div className="cart">
      <CartHeading itemCount={totalItems} />
      <div className="cart-items">
        {cartItems.map(element => (
          <ShoppingCartItem
            key={element.book._id}// key={element.id}
            item={element}
            apiurl={apiurl}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
}

export default Cart;
