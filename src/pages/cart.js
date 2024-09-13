import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
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
      <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;

