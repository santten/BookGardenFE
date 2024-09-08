import React from 'react'
import ShoppingCart from '../svg_icons/cart.svg'

function OrderButton() {
  return (
    <div className="text-center px-[1rem] py-[0.5rem] bg-black min-w-[160px] rounded-[99px]">
      <p className="text-base text-white font-semibold inline">Order Now&ensp;</p> 
      <img className="invert w-[1rem] inline" src={ShoppingCart}></img>
    </div>
  )
}

export default OrderButton