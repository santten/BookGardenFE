import React from 'react'
import { Icon } from '@iconify/react';

function CheckOutButton() {
  return (
    <div className="text-center px-[1rem] py-[0.5rem] bg-black w-max rounded-[99px] hover:bg-secondary">
      <p className="text-base text-white font-semibold inline">Proceed to Checkout&ensp;</p> 
      <Icon icon="material-symbols:shopping-cart" width="1.25rem" className="text-white inline"/>
    </div>
  )
}

export default CheckOutButton;