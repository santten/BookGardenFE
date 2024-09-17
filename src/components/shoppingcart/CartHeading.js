// ShoppingCart.js
import React from 'react';
import PropTypes from 'prop-types';
import './CartHeading.css'; // Import the CSS file if using CSS for styling

const CartHeading = ({ itemCount, onRemove }) => {
  return (
    <div className=" font-title  text-[48px]">
      <span>Shopping Cart </span>
      <span>({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
    </div>
  );
};

CartHeading.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired, // Ensure a remove function is passed
};

export default CartHeading;
