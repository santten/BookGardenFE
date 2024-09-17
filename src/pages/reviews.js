import React from 'react'
import UserReviews from '../components/account/UserReviews'
import MyAccount from '../components/account/MyAccount'

function UserReviewsPage() {
    return (
      <div className="relative grid grid-rows-[1fr_auto]"> 

        <div className="App flex justify-between pb-20">
        <div className="flex-none w-1/4 p-4">
          <MyAccount activepage="accountreviews"/>
        </div>
        <div className="flex-none w-3/4 p-4">
          <UserReviews />
        </div>
      </div>
      </div>

    )
}

export default UserReviewsPage