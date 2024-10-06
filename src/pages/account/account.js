import React from 'react'
import AccountDetails from '../../components/account/AccountDetails'
import MyAccount from '../../components/account/MyAccount'
import img from '../../images/clover_tilted.svg';

const AccountDetailsPage = () => {
  return (
    <div className="relative overflow-hidden min-h-[77vh]">
      <div className="containerBig flex flex-col md:flex-row gap-[1rem] mx-auto">
        <div>
          <MyAccount />
        </div>
        <div className="w-full">
          <AccountDetails />
        </div>
      </div >

      <img src={img} className="z-[-999] absolute right-[-10rem] bottom-[-10rem]" alt="" />

    </div >
  )
}

export default AccountDetailsPage;