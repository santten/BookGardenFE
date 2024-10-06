import React from 'react';
import ContactPage from '../components/contactpage/ContactPage'; // Adjust the path as needed
import About from '../components/index/About';
import account from '../images/account.png';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Section with background image */}
        <div 
        className="bg-contain bg-right-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${account})`, 
        }}
      >
        <ContactPage />
      </div>
      
      {/* About Section */}
      <div>
        <About context="contact"/>
      </div>
    </div>
  );
}

export default Contact;