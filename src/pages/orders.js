import React from 'react'
import OrderHistory from '../components/OrderHistory'
import MyAccount from '../components/MyAccount'

function OrderHistoryPage() {
    return (
        <div className="App flex justify-between">
        <div className="flex-none w-1/4 p-4">
          <MyAccount />
        </div>
        <div className="flex-none w-3/4 p-4">
          <OrderHistory />
        </div>
      </div>
    )
}

export default OrderHistoryPage;