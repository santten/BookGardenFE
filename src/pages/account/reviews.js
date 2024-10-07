import React from 'react'
import UserReviews from '../../components/account/UserReviews'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

function UserReviewsPage() {
  return (
    <div className="relative overflow-hidden min-h-[77vh]">
      <div className="containerBig flex flex-col md:flex-row gap-[1rem] mx-auto">
        <div>
          <MyAccount activepage="accountreviews" />
        </div>
        <div className="w-full">
          <UserReviews />
        </div>
      </div>

      <img src={img} className="z-[-999] absolute right-[-10rem] bottom-[-10rem] opacity-50" alt="" />

    </div>
  )
}

export default UserReviewsPage