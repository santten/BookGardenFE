import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

function AccountDetails() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    username: '',
    userId: '',
  });

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem('token');  
      const userId = localStorage.getItem('userId');
      
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await fetch(`http://localhost:4000/api/users/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({
          firstName: data.firstName,
          lastName: data.lastName,
          emailAddress: data.email,
          username: data.username,
          userId: data._id,  
        });
      } else {
        console.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();  
  }, []);

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${formData.userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,   
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User details updated successfully');
      } else {
        alert('Failed to update user details');
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-3/4 p-8 my-12">
      <h3 className="text-2xl font-bold mb-6">Personal information</h3>
      <div className="mb-8">
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name<span className="text-red-500">*</span></label>
            <input id="firstName"
                   type="text"
                   name="firstName"
                   value={formData.firstName}
                   onChange={handleChange}
                   className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name<span className="text-red-500">*</span></label>
            <input id="lastName"
                   type="text"
                   name="lastName"
                   value={formData.lastName}
                   onChange={handleChange}
                   className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
          </div>
        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email address<span className="text-red-500">*</span></label>
          <input id="emailAddress"
                 type="email"
                 name="emailAddress"
                 value={formData.emailAddress}
                 onChange={handleChange}
                 className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username<span className="text-red-500">*</span></label>
          <input id="username"
                 type="text"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}
                 className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-6">Password change</h3>
      <div className="mb-8">
        <div className="w-1/2 mb-4">
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current password</label>
          <input id="currentPassword" type="password" placeholder="Enter your current password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New password</label>
          <input id="newPassword" type="password" placeholder="Enter your new password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm new password</label>
          <input id="confirmNewPassword" type="password" placeholder="Confirm your new password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
      </div>

      <button className="text-white py-2 px-4 rounded-full flex items-center space-x-2 bg-grey-dark hover:bg-black" onClick={handleSaveClick}>
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

// // AccountDetails.js
// import React from 'react';
// import { Icon } from '@iconify/react'
// import { useEffect, useState } from 'react';

// function AccountDetails() {

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     emailAddress: '',
//     username: '',
//   });
//   const handleSaveClick = async () => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/users/${formData.userId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         alert('User details updated successfully');
//       } else {
//         alert('Failed to update user details');
//       }
//     } catch (error) {
//       console.error('Error updating user details:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
//   return (
//     <div className="w-3/4 p-8 my-12">
//       <h3 className="text-2xl font-bold mb-6">Personal information</h3>
//       <div className="mb-8">
//         <div className="flex mb-4">
//           <div className="w-1/2 pr-2">
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name<span className="text-red-500">*</span></label>
//             <input id="firstName" 
//                    type="text"           
//                    value={formData.firstName}          
//                    onChange={handleChange}
//                    className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
//           </div>
//           <div className="w-1/2 pl-2">
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name<span className="text-red-500">*</span></label>
//             <input id="lastName" type="text" defaultValue="Current info" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
//           </div>
//         </div>
//         <div className="w-1/2 mb-4">
//           <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email address<span className="text-red-500">*</span></label>
//           <input id="emailAddress" type="email" defaultValue="Current info" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
//         </div>
//         <div className="w-1/2 mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username<span className="text-red-500">*</span></label>
//           <input id="username" type="text" defaultValue="Current info" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />   {/* placeholder="Current info"  */}
//         </div>
//       </div>

//       <h3 className="text-2xl font-bold mb-6">Password change</h3>
//       <div className="mb-8">
//         <div className="w-1/2 mb-4">
//           <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current password</label>
//           <input id="currentPassword" type="password" placeholder="Enter your current password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
//         </div>
//         <div className="w-1/2 mb-4">
//           <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New password</label>
//           <input id="newPassword" type="password" placeholder="Enter your new password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
//         </div>
//         <div className="w-1/2 mb-4">
//           <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm new password</label>
//           <input id="confirmNewPassword" type="password" placeholder="Confirm your new password" className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
//         </div>
//       </div>

//       <button className="text-white py-2 px-4 rounded-full flex items-center space-x-2 bg-grey-dark hover:bg-black">
//         <span className="font-semibold">Save</span>
//         <span className="ml-2"><Icon icon="material-symbols:save-outline" width="24px"/></span>
//       </button>

//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-2">Delete account</h3>
//         <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
//         <button className="bg-warning text-white py-2 px-4 rounded-full font-semibold hover:bg-[#d6433b]">Delete your account</button>
//       </div>
//     </div>
//   );
// }

// export default AccountDetails;