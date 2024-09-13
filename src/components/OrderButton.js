
// src/components/OrderButton.js
import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CartSummary.css';

function OrderButton() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="orderButton" onClick={handleClick}>
      <p>Proceed to order </p> 
      <Icon icon="streamline:shopping-cart-3-shopping-cart-checkout" />
    </div>
  );
}

export default OrderButton;