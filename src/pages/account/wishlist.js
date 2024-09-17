import React from 'react'
import WishList from '../../components/account/WishList'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

function WishListPage() {
  return (
    <div className="bigContainer flex flex-row gap-[1rem] mx-auto min-h-90vh">
      <div className="basis-1/4">
        <MyAccount activepage="wishlist" />
      </div>
      <div className="basis-3/4">
        <WishList />
      </div>
    </div>
  )
}

export default WishListPage