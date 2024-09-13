import React, { useState } from 'react'; // Import useState
import bookArray from '../temporary_mock_data';
import CartHeading from '../components/CartHeading';
import ShoppingCartItem from '../components/ShoppingCartItem';
import CartSummary from '../components/CartSummary';
import './cartPage.css'; 

function Cart() {
  const [cartItems, setCartItems] = useState(bookArray.map(item => ({ ...item, quantity: 1 }))); // Initialize cart with quantity

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
    setCartItems(prevItems => {
      const updatedItems = prevItems
        .map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(cartItem => cartItem.quantity > 0); // Remove items with quantity 0
      return updatedItems;
    });
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <CartHeading itemCount={totalItems} />
      <div className="cart-items">
        {cartItems.map(item => (
          <ShoppingCartItem
            key={item.id}
            item={item}
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

