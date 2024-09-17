import React from 'react'
import UserReviews from '../../components/account/UserReviews'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

function UserReviewsPage() {
  return (
    <div className="relative">
      <div className="bigContainer flex flex-row gap-[1rem] mx-auto min-h-90vh">
        <div className="basis-1/4">
          <MyAccount activepage="accountreviews" />
        </div>
        <div className="basis-3/4">
          <UserReviews />
        </div>
      </div>
    </div>
  )
}

export default UserReviewsPage