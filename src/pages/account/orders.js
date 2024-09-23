import React from 'react'
import OrderHistory from '../../components/account/OrderHistory'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

function OrderHistoryPage() {
  return (
    <div className="relative overflow-hidden min-h-[86vh]">
      <div className="bigContainer flex flex-row gap-[1rem] mx-auto">
        <div className="basis-1/4">
          <MyAccount activepage="pastorders" />
        </div>
        <div className="basis-3/4">
          <OrderHistory />
        </div>
      </div>

      <img 
        src={img} 
        className="z-[-10] absolute right-[-10rem] bottom-[-10rem]" 
      />

    </div>
  )
}

export default OrderHistoryPage;