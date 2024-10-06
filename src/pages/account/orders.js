import React from 'react'
import OrderHistory from '../../components/account/OrderHistory'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

function OrderHistoryPage() {
  return (
    <div className="relative overflow-hidden min-h-[77vh]">
      <div className="containerBig flex flex-col md:flex-row gap-[1rem] mx-auto">
        <div>
          <MyAccount activepage="pastorders" />
        </div>
        <div className="w-full">
          <OrderHistory />
        </div>
      </div>

      <img src={img} className="z-[-999] absolute right-[-10rem] bottom-[-10rem] opacity-50" alt="" />

    </div>
  )
}

export default OrderHistoryPage;