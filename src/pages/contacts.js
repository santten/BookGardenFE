import React from 'react';
import ContactPage from '../components/contactpage/ContactPage'; // Adjust the path as needed
import About from '../components/index/About';
import account from '../images/account.png';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Section with background image */}
      <div 
        className="flex-none bg-cover bg-no-repeat bg-right-bottom h-1/4 sm:h-1/3 md:h-1/2 lg:h-1/2 xl:h-1/3"
        style={{
          backgroundImage: `url(${account})`, 
          backgroundSize: 'contain',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent background
        }}
      >
        <ContactPage />
      </div>
      
      {/* About Section */}
      <div className="mt-0 flex-1">
        <About />
      </div>
    </div>
  );
}

export default Contact;

// import React from 'react';
// import ContactPage from '../components/contactpage/ContactPage'; // Adjust the path as needed
// import About from '../components/index/About';
// import account from '../images/account.png';

// function Contact() {
//   return (
//     <div className=" flex flex-col">
//       {/* Contact Section with background image */}
//       <div 
//         className="flex-none h-2/3" 
//         style={{
//           backgroundImage: `url(${account})`, 
//           backgroundPosition: 'right bottom', 
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//         }}
//       >
//         <ContactPage />
//       </div>
      
//       {/* About Section without background image */}
//       <div className="flex-none h-1/3 mt-0">
//         <About />
//       </div>
//     </div>
//   );
// }

// export default Contact;