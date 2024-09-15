import React from 'react'
import UserReviews from '../components/UserReviews'
import MyAccount from '../components/MyAccount'

function UserReviewsPage() {
    return (
        <div className="App flex justify-between">
        <div className="flex-none w-1/4 p-4">
          <MyAccount />
        </div>
        <div className="flex-none w-3/4 p-4">
          <UserReviews />
        </div>
      </div>
    )
}

export default UserReviewsPage