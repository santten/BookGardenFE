import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import subscriptions from '../../images/subscriptions-section.png';
import { toast } from 'react-toastify';

const Subscriptions = () => {
  const [email, setEmail] = useState('');
  const apiurl = process.env.REACT_APP_API_URL

  // Update subscription fetch
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiurl}/api/newsletter/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Subscription successful! Thank you for subscribing.');
        setEmail("");  
      } else {
        const data = await response.json();
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');

    }
  };

  return (
    <div className="bg-primary py-20"
      style={{
        backgroundImage: `url(${subscriptions})`,
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}>

      <div className="container text-center"> 
        <h2 className="text-2xl sm:text-4xl lg:text-[64px] mb-6 font-title">
          WOULD YOU LIKE TO JOIN <span className="text-primary-dark">NEWSLETTERS</span>?
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-80 rounded-full border border-grey shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-dark"
            onChange={(e) => setEmail(e.target.value)}
            value={email}   
            required
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full flex items-center my-[1rem] space-x-2 hover:bg-grey-dark"
          >
            <span className="font-semibold">Subscribe</span>
            <Icon icon="fluent:send-24-filled" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscriptions;