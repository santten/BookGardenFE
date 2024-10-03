import React from 'react'
import AccountDetails from '../../components/account/AccountDetails'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

const AccountDetailsPage = () => {
  return (
    <div className="relative overflow-hidden min-h-[77vh]">
      <div className="bigContainer flex flex-row gap-[1rem] mx-auto min-h-90vh">
        <div className="basis-1/4">
          <MyAccount />
        </div>
        <div className="basis-3/4">
          <AccountDetails />
        </div>
      </div>

      <img src={img} alt="" className="z-[-999] absolute right-[-10rem] bottom-[-10rem]" />

    </div>
  )
}

export default AccountDetailsPage;