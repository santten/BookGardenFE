import React from 'react'
import { Icon } from '@iconify/react';
import './CartSummary.css'

function OrderButton() {
  return (
    <div className="orderButton">
      <p >Proceed to order</p> 
      <Icon icon="streamline:shopping-cart-3-shopping-cart-checkout" />
    </div>
  )
}

export default OrderButton