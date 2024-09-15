import React from 'react'
import AccountDetails from '../components/AccountDetails'
import MyAccount from '../components/MyAccount'

function AccountDetailsPage() {
    return (
        <div className="App flex justify-between">
        <div className="flex-none w-1/4 p-4">
          <MyAccount />
        </div>
        <div className="flex-none w-3/4 p-4">
          <AccountDetails />
        </div>
      </div>
    )
}

export default AccountDetailsPage;