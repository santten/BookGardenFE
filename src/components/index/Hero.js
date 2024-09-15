import React from "react";
import hero from '../../images/hero.png';
import { Icon } from "@iconify/react"
import {
  Link

} from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="bg-white relative mx-auto"
      style={{
        maxWidth: '1600px',
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50px',
        height: 'auto',
        padding: '20px',
      }}
    >

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div>
          <h2 className="text-5xl text-black" style={{ fontFamily: "'Koulen', sans-serif" }}>
            A GARDEN OF BOOKS </h2>
          <h2 className="text-5xl text-white" style={{ fontFamily: "'Koulen', sans-serif" }}>
            FOR EVERY MIND.</h2>
          <Link to="/store"><button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base rounded-[24px] font-semibold shadow-sm text-white bg-black hover:bg-grey-dark">
            Shop now &nbsp;<Icon icon="tdesign:arrow-right" width="1.5rem"></Icon>
          </button></Link>
        </div>
      </div>
      {/* 在背景图片容器下方添加 margin-bottom */}
      {/* <div style={{ marginBottom: '25px' }}></div> */}
    </section>
  );
};

export default Hero;
