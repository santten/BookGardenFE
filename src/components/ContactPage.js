import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <section className='w-full'>
            <div className="containerSmall flex flex-col py-12">
                <h1 className="contact-title">
                    <span>OUR</span>
                    <span> CONTACTS</span>
                </h1>

                {/* Contact Section */}
                <div className="contact-section">
                    <div className="contact-grid">
                        {/* Map Embed */}
                        <div className="contact-map">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3780745354438!2d25.075456477551317!3d60.22412097505998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208cda130006f%3A0xa777acdeae7ab784!2sMetropolia%20University%20of%20Applied%20Sciences%20%E2%80%94%20Myllypuro%20Campus!5e0!3m2!1sfr!2sfi!4v1725896190238!5m2!1sfr!2sfi"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Our Location"
                            ></iframe>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div>
                                <p>Address:</p>
                                <p>Myllypurontie 1, Helsinki</p>
                            </div>
                            <div>
                                <p>Post Address:</p>
                                <p>PL 4000, 00079 Metropolia</p>
                            </div>
                            <div>
                                <p>Customer Support:</p>
                                <p>012 3456 789</p>
                                <p>Monday - Friday 8-18</p>
                            </div>
                            <div>
                                <p>Email:</p>
                                <p>support@openbook.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </section>
    );
}

export default ContactPage;

