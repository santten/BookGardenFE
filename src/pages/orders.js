import React from 'react'
import OrderHistory from '../components/account/OrderHistory'
import MyAccount from '../components/account/MyAccount'

function OrderHistoryPage() {
    return (
      <div className="relative min-h-[85.5vh] grid grid-rows-[1fr_auto]"> 

        <div className="App flex justify-between pb-20">
          <div className="flex-none w-1/4 p-4">
            <MyAccount activepage="pastorders"/>
          </div>
          <div className="flex-none w-3/4 p-4">
            <OrderHistory />
          </div>
        </div>
      </div>

    )
}

export default OrderHistoryPage;