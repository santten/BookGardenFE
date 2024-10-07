import React from 'react';

function ContactPage() {
    return (
        <section className='w-full'>
            <div className="flex flex-col w-[96vw] md:w-[60vw] mx-auto">
                <h1 className="font-title text-4xl my-[1rem]">
                    <span className="text-secondary">CONTACT</span>
                    <span> US</span>
                </h1>

                {/* Contact Section */}
                <div className="mb-[2rem]">
                    <div className="flex flex-col md:flex-row gap-[1rem]">
                        {/* Map Embed */}
                        <div className="w-[100%]">
                            <iframe
                                className="w-full min-h-[60vh]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3780745354438!2d25.075456477551317!3d60.22412097505998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208cda130006f%3A0xa777acdeae7ab784!2sMetropolia%20University%20of%20Applied%20Sciences%20%E2%80%94%20Myllypuro%20Campus!5e0!3m2!1sen!2sfi!4v1725896190238!5m2!1sen!2sfi"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Our Location"
                            ></iframe>
                        </div>

                        {/* Contact Info */}
                        <div className="w-max px-[0.5rem]">
                            <p>
                                <b>Address:</b><br />
                                Myllypurontie 1, Helsinki<br />
                                <br />
                                <b>Post Address:</b><br />
                                PL 4000, 00079 Metropolia<br />
                                <br />
                                <b>Customer Support:</b><br />
                                012 3456 789<br />
                                Monday - Friday 8-18<br />
                                <br />
                                <b>Email:</b><br />
                                support@bookgarden.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;

