/*/ src/components/OrderButton.js
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
export default OrderButton;*/

import React from 'react'
import { Icon } from '@iconify/react';

function OrderButton() {
  return (
    <div className="text-center px-[1rem] py-[0.5rem] bg-black w-max rounded-[99px] hover:bg-secondary">
      <p className="text-base text-white font-semibold inline">Add To Cart&ensp;</p> 
      <Icon icon="material-symbols:shopping-cart" width="1.25rem" className="text-white inline"/>
    </div>
  )
}

export default OrderButton
