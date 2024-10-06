import React from 'react'
import WishList from '../../components/account/WishList'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

function WishlistPage() {
  return (
    <div className="relative overflow-hidden min-h-[77vh]">
      <div className="bigContainer flex flex-row gap-[1rem] mx-auto">
        <div className="basis-1/4">
          <MyAccount activepage="pastorders" />
        </div>
        <div className="basis-3/4">
          <WishList />
        </div>
      </div>

      <img src={img} className="z-[-999] absolute right-[-10rem] bottom-[-10rem]" />

    </div>
  )
}

export default WishlistPage;