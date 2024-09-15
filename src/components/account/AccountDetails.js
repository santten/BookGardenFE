
// AccountDetails.js
import React from 'react';
import { Icon } from '@iconify/react'

function AccountDetails() {
  return (
    <div className="w-3/4 p-8 my-12">
      <h3 className="text-2xl font-bold mb-6">Personal information</h3>
      <div className="mb-8">
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name<span className="text-red-500">*</span></label>
            <input id="firstName" type="text" defaultValue="Current name here" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name<span className="text-red-500">*</span></label>
            <input id="lastName" type="text" defaultValue="Current info" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email address<span className="text-red-500">*</span></label>
          <input id="emailAddress" type="email" defaultValue="Current info" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username<span className="text-red-500">*</span></label>
          <input id="username" type="text" defaultValue="Current info" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6">Password change</h3>
      <div className="mb-8">
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current password</label>
          <input id="currentPassword" type="password" placeholder="Enter your current password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New password</label>
          <input id="newPassword" type="password" placeholder="Enter your new password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div>
          <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm new password</label>
          <input id="confirmNewPassword" type="password" placeholder="Confirm your new password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
      </div>

      <button className="text-white py-2 px-4 rounded-full flex items-center space-x-2 bg-grey-dark hover:bg-black">
        <span className="font-semibold">Save</span>
        <span className="ml-2"><Icon icon="material-symbols:save-outline" width="24px"/></span>
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Delete account</h3>
        <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button className="bg-warning text-white py-2 px-4 rounded-full font-semibold hover:bg-[#d6433b]">Delete your account</button>
      </div>
    </div>
  );
}

export default AccountDetails;



