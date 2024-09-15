// src/CartSummary.js
import React from 'react';
import PropTypes from 'prop-types';
import OrderButton from './OrderButton';
import { useNavigate } from 'react-router-dom';

function CartSummary({ totalItems, totalPrice }) {
  const navigate = useNavigate(); // Initialize navigate

  const handleProceedToCheckout = () => {
    navigate('/payment', { state: { totalPrice, totalItems } });// Navigate to the checkout page
  };

  return (
    <div className="cart-summary">
      <div className="summary-details">
        <p>Total Items: <strong>{totalItems}</strong></p>
        <p>Total to Pay: <strong>${totalPrice.toFixed(2)}</strong></p>
      </div>
      {/* Wrap OrderButton with a div and add the onClick for navigation */}
      <div onClick={handleProceedToCheckout}>
        <OrderButton />
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartSummary;
