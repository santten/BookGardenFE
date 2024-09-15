import React from 'react'
import WishList from '../components/account/WishList'
import MyAccount from '../components/account/MyAccount'

function WishListPage() {
    return (
        <div className="App flex justify-between">
        <div className="flex-none w-1/4 p-4">
          <MyAccount />
        </div>
        <div className="flex-none w-3/4 p-4">
          <WishList />
        </div>
      </div>
    )
}

export default WishListPage