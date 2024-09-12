import React from 'react';

function ContactPage() {
    return (
        <div className="h-screen bg-white flex flex-col p-6">
            <h1 className="text-5xl font-bold ml-12 mb-7 mt-8">
                <span className="text-[#8DBAB5]">OUR</span>
                <span className="text-gray-800"> CONTACT</span>
            </h1>

            {/* Contact Section */}
            <div className=" h-screen max-w-9xl w-full  bg-white items-center justify-center rounded-lg p-12 h-100">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Map Embed */}
                    <div className=" w-704 h-469 bg-gray-300 rounded-lg overflow-hidden shadow-md ">
                        <iframe
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.3780745354438!2d25.075456477551317!3d60.22412097505998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208cda130006f%3A0xa777acdeae7ab784!2sMetropolia%20University%20of%20Applied%20Sciences%20%E2%80%94%20Myllypuro%20Campus!5e0!3m2!1sfr!2sfi!4v1725896190238!5m2!1sfr!2sfi" allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Our Location"
                        ></iframe>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-4 w-463 h-469">

                        <div>
                            <p className="font-bold">Address:</p>
                            <p>Myllypurontie 1, Helsinki</p>

                        </div>
                        <div>
                            <p className="font-bold">Post Address:</p>
                            <p>PL 4000, 00079 Metropolia</p>

                        </div>
                        <div>
                            <p className="font-bold">Customer Support::</p>
                            <p>012 3456 789</p>
                            <p>Monday - Friday 8-18</p>
                        </div>
                        <div>
                            <p className="font-bold">Email:</p>
                            <p>support@openbook.com</p>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    );
}

export default ContactPage;