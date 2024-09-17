import React from 'react';
import ContactPage from '../components/ContactPage'; // Adjust the path as needed
import About from '../components/index/About';

function Contact() {
    return (
        <div className="w-screen">
            
            <div className="w-custom-width h-custom-height items-center justify-center">
                <ContactPage />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
}

export default Contact;
