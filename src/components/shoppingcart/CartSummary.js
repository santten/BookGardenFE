// src/CartSummary.js
import React from 'react';
import PropTypes from 'prop-types';
import CheckOutButton from './CheckOutButton';
import { useNavigate } from 'react-router-dom';

function CartSummary({ totalItems, totalPrice }) {
  const navigate = useNavigate(); // Initialize navigate

  const handleProceedToCheckout = () => {
    navigate('/payment', { state: { totalPrice, totalItems } }); // Navigate to the checkout page
  };

  return (
      <div className="relative flex flex-col items-end">
      <div className="flex items-center justify-between w-full mb-4">
      <div className="text-right flex-grow">

        <p className="text-[24px]">Subtotal ({totalItems} items):</p>
        <p className="text-[40px] font-bold">{totalPrice.toFixed(2)} €</p>
      </div>
      {/* Wrap OrderButton with a div and add the onClick for navigation */}
      <div onClick={handleProceedToCheckout} className="ml-4">
        <CheckOutButton />
      </div>
    </div>
    </div>


  );
}

CartSummary.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartSummary;
