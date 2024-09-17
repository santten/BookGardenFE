import React from "react";
import hero from '../../images/hero.png';
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-white relative containerBig rounded-4xl"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'auto',
        padding: '20px',
      }}
    >

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <h2 className="text-5xl text-black font-title">
            A GARDEN OF BOOKS </h2>
          <h2 className="text-5xl text-white font-title">
            FOR EVERY MIND.</h2>
          <Link to="/store"><button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base rounded-[24px] font-semibold shadow-sm text-white bg-black hover:bg-grey-dark">
            Shop now &nbsp;<Icon icon="tdesign:arrow-right" width="1.5rem"></Icon>
          </button></Link>
        </div>
      </div>
   </section>
  );
};

export default Hero;
