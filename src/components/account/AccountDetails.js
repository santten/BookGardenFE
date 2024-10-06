import React, { useEffect, useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function AccountDetails() {
  const apiurl = process.env.REACT_APP_API_URL

  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  // Personal information
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    username: '',
    userId: '',
  });

  // Password data
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Fetch user details

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        const userId = JSON.parse(localStorage.getItem('userId'));

        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await fetch(`${apiurl}/api/users/${userId}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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

    fetchUserDetails();
  }, [apiurl]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  // Update user info
  const updateUserInfo = async () => {
    let token = JSON.parse(localStorage.getItem('token'));

    try {
      const response = await fetch(`${apiurl}/api/users/${formData.userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('User details updated successfully');

      } else {
        toast.success('Failed to update user details');

      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  // Update password
  const updateUserPassword = async () => {
    let token = JSON.parse(localStorage.getItem('token'));

    // Ensure new password and confirm password match
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      toast.success('New password and confirm password do not match');

      return;
    }

    try {
      const response = await fetch(`${apiurl}/api/users/${formData.userId}/password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      if (response.ok) {
        toast.success('Password updated successfully');
      } else {
        toast.success('Failed to update password');

      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  // Handle saving both user info and password
  const handleSave = async () => {
    if (passwordData.currentPassword && passwordData.newPassword) {
      // If the user provided password info, update both user info and password
      await updateUserPassword();
    }
    // Always update user info, even if password is being updated
    await updateUserInfo();
  };


  //Delete user account
  const deleteAccount = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const userId = formData.userId;

    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const response = await fetch(`${apiurl}/api/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(false);
          toast.success('Your account has been deleted successfully.');
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          localStorage.removeItem('userId');
          navigate('/');
        } else {
          toast.success('Failed to delete your account. Please try again.');


        }
      } catch (error) {
        console.error('Error deleting account:', error);
        toast.success('An error occurred while deleting your account.');
      }
    }
  };


  return (
    <div className="w-3/4 p-8 my-12">

      {/* Personal information Section */}
      <h2 className="text-3xl font-title mb-6 text-left">Personal Information</h2>
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

      {/* Password change Section */}
      <h2 className="text-3xl font-title mb-6 text-left">Password Change</h2>
      <div className="mb-8">
        <div className="w-1/2 mb-4">
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current password</label>
          <input id="currentPassword"
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Enter your current password"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New password</label>
          <input id="newPassword"
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter your new password"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
        <div className="w-1/2 mb-4">
          <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm new password</label>
          <input id="confirmNewPassword"
            type="password"
            name="confirmNewPassword"
            value={passwordData.confirmNewPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm your new password"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-half" />
        </div>
      </div>

      {/* Save button */}
      <button className="text-white py-2 px-4 rounded-full flex items-center space-x-2 bg-grey-dark hover:bg-black" onClick={handleSave}>
        <span className="font-semibold">Save</span>
        <span className="ml-2"><Icon icon="material-symbols:save-outline" width="24px" /></span>
      </button>

      {/* Delete account Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-title mb-6 text-left">Delete Account</h2>
        <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button
          className="bg-warning text-white py-2 px-4 rounded-full font-semibold hover:bg-[#d6433b]"
          onClick={deleteAccount}
        >
          Delete your account
        </button>
      </div>


    </div>
  );
}

export default AccountDetails;