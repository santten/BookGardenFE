import React from 'react';
import ContactPage from '../components/ContactPage'; // Adjust the path as needed
import About from '../components/index/About';
import account from '../images/account.png';

function Contact() {
  return (
    <div className=" flex flex-col">
      {/* Contact Section with background image */}
      <div 
        className="flex-none h-2/3" 
        style={{
          backgroundImage: `url(${account})`, 
          backgroundPosition: 'right bottom', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <ContactPage />
      </div>
      
      {/* About Section without background image */}
      <div className="flex-none h-1/3 mt-0">
        <About />
      </div>
    </div>
  );
}

export default Contact;