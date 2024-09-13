// src/CartSummary.js
import React from 'react';
import PropTypes from 'prop-types';
import OrderButton from './OrderButton';
function CartSummary({ totalItems, totalPrice }) {
  return (
    <div className="cart-summary">
      <div className="summary-details">
        <p>Total Items: <strong>{totalItems}</strong></p>
        <p>Total to Pay: <strong>${totalPrice.toFixed(2)}</strong></p>
      </div>
        <OrderButton />
        </div>
  );
}

CartSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartSummary;
