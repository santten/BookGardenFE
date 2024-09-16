import React from 'react';
import genres from '../../images/genres.png';
import genres1 from '../../images/genres-1.png';
import genres2 from '../../images/genres-2.png';
import genres3 from '../../images/genres-3.png';
import { Icon } from '@iconify/react';

const Genres = () => {
  return (
    <div className="w-full bg-secondary-light py-8"
    style={{ 
      backgroundImage: `url(${genres})`, 
      //backgroundSize: 'cover', 
      backgroundPosition: 'right', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain', 


    }}>
    <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-center text-3xl font-bold mb-8">
            <span className="text-black text-[64px] font-title">FIND YOUR BOOK BY</span>
            <span className="text-secondary text-[64px] font-title"> GENRE</span>
        </h1>
      
        <div className="grid grid-cols-2 gap-8">
        
        {/* Student Books - Takes the whole left side */}
        <div className="relative group">
        <img 
            src= {genres1}
            alt="Student Books" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
          <div className="absolute inset-0 flex justify-center items-center">
          <button className="absolute top-20 left-8 bg-black text-white px-6 py-2 rounded-full text-sm whitespace-nowrap flex items-center space-x-1 transition-opacity duration-300">
            <span className="text-l">Find more</span><Icon width="1.75rem" icon="tdesign:arrow-right"></Icon>
            </button>

          </div>
          <p className="absolute top-5 left-8 text-black text-[2.2rem] font-title">STUDENT BOOKS</p>
        </div>

        <div className="flex flex-col gap-8">
        {/* Children Books - Top right */}
        <div className="h-3/4 relative group">
          <img 
            src={genres2}
            alt="Children Books" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
          <div className="absolute inset-0 flex justify-center items-center">
          <button className="absolute top-20 left-8 bg-black text-white px-6 py-2 rounded-full text-sm whitespace-nowrap flex items-center space-x-1 transition-opacity duration-300">
            <span className="text-l">Find more</span> <Icon width="1.5rem" icon="tdesign:arrow-right"></Icon>
            </button>

          </div>
          <p className="absolute top-5 left-8 text-black text-[2.2rem] font-bold font-title">CHILDREN BOOKS</p>
        </div>

        {/* Classic Books - Bottom right */}
        <div className="relative group">
        <img 
            src={genres3}
            alt="Classic Books" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-3xl"></div>
          <div className="absolute inset-0 flex justify-center items-center">
          <button className="absolute top-20 left-8 bg-black text-white px-6 py-2 rounded-full text-sm whitespace-nowrap flex items-center space-x-1 transition-opacity duration-300">
            <span>Find more</span> <Icon width="1.5rem" icon="tdesign:arrow-right"></Icon>
            </button>

          </div>
          <p className="absolute top-5 left-8 text-black text-[2.2rem] font-bold font-title">CLASSIC BOOKS</p>
        </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Genres;
