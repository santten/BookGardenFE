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
    <div className="flex flex-col items-end px-4 py-6 border-t border-t-[2px] border-primary-dark mt-2">
      <div className="flex flex-col gap-[1rem] items-end justify-between w-full mb-4">
        <div className="text-right flex-grow">
          <p className="text-xl md:text-2xl">Subtotal ({totalItems} items):</p>
          <p className="text-3xl md:text-4xl font-bold">{totalPrice.toFixed(2)} €</p>
        </div>

        {/* Wrap OrderButton with a div and add the onClick for navigation */}
        <div onClick={handleProceedToCheckout}>
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
