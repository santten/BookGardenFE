import React from "react";
import hero from '../images/hero.png';

const Hero = () => {
  return (
    <section
      className="bg-white relative mx-auto" 
      style={{ 
        maxWidth: '1600px', 
        backgroundImage: `url(${hero})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        borderRadius: '50px' ,
        height: 'auto',
        padding: '20px',
      }}
      >
    {/* // ></section> */}
      {/* <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between"> */}
     
      {/* <
       src={hero}
       alt="Books"
       className="w-full max-w-4xl h-auto object-cover rounded-lg" 
         
      />     */}
  
              {/* <img
          src={hero}
          alt="Books"
          className="w-full max-w-4xl h-auto object-cover rounded-lg"
        />
      </div> */}
 
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <h2 className="text-5xl text-black" style={{ fontFamily: "'Koulen', sans-serif" }}>
            A GARDEN OF BOOKS </h2>
          <h2 className="text-5xl text-white" style={{ fontFamily: "'Koulen', sans-serif" }}>
            FOR EVERY MIND.</h2>
          <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800">
            Shop now
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
      {/* 在背景图片容器下方添加 margin-bottom */}
      {/* <div style={{ marginBottom: '25px' }}></div> */}
    </section>
  );
};

export default Hero;
