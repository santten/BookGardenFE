import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import bookArray from '../temporary_mock_data';
import CartHeading from '../components/shoppingcart/CartHeading';
import ShoppingCartItem from '../components/shoppingcart/ShoppingCartItem';
import CartSummary from '../components/shoppingcart/CartSummary';
import './cartPage.css';

function Cart() {
  const [cartItems, setCartItems] = useState([{...bookArray[3], quantity: 2}, {...bookArray[23], quantity: 1}])
  
  // the initial code had the cart open automatically with 1 of every item in stock. uncomment to see how:  
  // const [cartItems, setCartItems] = useState(bookArray.map(item => ({ ...item, quantity: 1 }))); // Initialize cart with quantity
  
  // the handling of the items will be thought about later, but it should likely be initially empty
  // uncomment this line if you want to start with an empty cart:
  // const [cartItems, setCartItems] = useState([])

  const handleAdd = (item) => {
    // Update the cart item quantity
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleRemove = (item) => {
    // Remove the item or decrease quantity if more than 1
    setCartItems(prevItems =>
      prevItems
        .map(cartItem =>
          cartItem.id === item.id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(cartItem => cartItem.id !== item.id || cartItem.quantity > 0) // Filter out item if quantity is 0
    );
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate('/payment', { state: { cartItems } }); // Pass cartItems in the state
  };

  return (
    <div className="cart">
      <CartHeading itemCount={totalItems} />
      <div className="cart-items">
        {cartItems.map(element => (
          <ShoppingCartItem
            key={element.id}
            item={element}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
}

export default Cart;

