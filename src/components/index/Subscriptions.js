import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import subscriptions from '../../images/subscriptions-section.png';

const Subscriptions = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email to backend)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="bg-primary py-20"
      style={{
        backgroundImage: `url(${subscriptions})`,
        //backgroundSize: 'cover', 
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',


      }}>

      <div className="container text-center"> 
        <h2 className="text-3xl text-[64px] mb-6 font-title" 
            style={{ whiteSpace: 'nowrap' }}
        >
          WOULD YOU LIKE TO JOIN <span className="text-primary-dark">NEWSLETTERS</span>?
        </h2>

        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-80 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 focus:ring-2 focus:ring-green-500"
          >
            <span className="font-semibold">Subscribe</span>
            <Icon icon="fluent:send-24-filled"></Icon>
            </button>
        </form>
      </div>
    </div>
  );
};

export default Subscriptions;
