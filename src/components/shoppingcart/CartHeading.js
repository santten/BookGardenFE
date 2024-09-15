// ShoppingCart.js
import React from 'react';
import PropTypes from 'prop-types';
import './CartHeading.css'; // Import the CSS file


const CartHeading = ({ itemCount }) => {
  return (
    <div className="shopping-cart">
      <span>Shopping Cart </span>
      <span>({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
    </div>
  );
};

CartHeading.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartHeading;
