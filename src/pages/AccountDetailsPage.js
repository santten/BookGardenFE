import React from 'react'
import AccountDetails from '../components/account/AccountDetails'
import MyAccount from '../components/account/MyAccount'

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