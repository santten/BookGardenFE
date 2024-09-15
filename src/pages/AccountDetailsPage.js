import React from 'react'
import AccountDetails from '../components/account/AccountDetails'
import MyAccount from '../components/account/MyAccount'

function AccountDetailsPage() {
  return (
    <div className="flex justify-between min-h-90vh">
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