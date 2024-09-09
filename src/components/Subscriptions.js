import React, { useState } from 'react';
import send from '../svg_icons/send.svg'

const Subscriptions = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email to backend)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="bg-primary py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 font-title">WOULD YOU LIKE TO JOIN <span className="text-primary-dark">NEWSLETTERS</span>?</h2>
        
        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-80 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 focus:ring-2 focus:ring-green-500"
>
             <span>Subscribe</span>
             <img src={send} alt="Send Icon" className="w-5 h-5" />
             </button>
        </form>
      </div>
    </div>
  );
};

export default Subscriptions;
