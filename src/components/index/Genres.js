import React from 'react';
import genres from '../../images/genres.png';
import genres1 from '../../images/genres-1.png';
import genres2 from '../../images/genres-2.png';
import genres3 from '../../images/genres-3.png';
import { Icon } from '@iconify/react';

const Genres = () => {
  return (
    <section className="w-full bg-secondary-light py-12"
      style={{
        backgroundImage: `url(${genres})`,
        //backgroundSize: 'cover', 
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',


      }}>
      <div className="container">
        <h1 className="text-center text-3xl mb-8">
          <span className="text-black text-[64px] font-title">FIND YOUR BOOK BY</span>
          <span className="text-secondary text-[64px] font-title"> GENRE</span>
        </h1>

        <div className="grid grid-cols-2 gap-8">

          {/* Student Books - Takes the whole left side */}
          <div className="relative group">
            <img
              src={genres1}
              alt="Student Books"
              className="object-cover rounded-[2rem]"
            />
            <div className="rounded-[2rem] absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <button className="text-[1rem] font-semibold absolute top-20 left-8 bg-black text-white px-6 py-[0.5rem] rounded-full flex items-center">
              Find more&nbsp;<Icon width="1.5rem" icon="tdesign:arrow-right" />
            </button>

            <p className="absolute top-5 left-8 text-black text-[2.2rem] font-title">FOR STUDENTS</p>
          </div>

          <div className="flex flex-col gap-8">

            {/* Children Books - Top right */}
            <div className="h-3/4 relative group">
              <img
                src={genres2}
                alt="Children Books"
                className="object-cover h-full rounded-[2rem]"
              />
              <div className="rounded-[2rem] absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <button className="text-[1rem] font-semibold absolute top-20 left-8 bg-black text-white px-6 py-[0.5rem] rounded-full flex items-center">
                Find more&nbsp;<Icon width="1.5rem" icon="tdesign:arrow-right" />
              </button>

              <p className="absolute top-5 left-8 text-black text-[2.2rem] font-title">Children's books</p>
            </div>

            {/* Classic Books - Bottom right */}
            <div className="relative group">
              <img
                src={genres3}
                alt="Classic Books"
                className="object-cover rounded-[2rem]"
              />
              <div className="rounded-[2rem] absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <button className="text-[1rem] font-semibold absolute top-20 left-8 bg-black text-white px-6 py-[0.5rem] rounded-full flex items-center">
                Find more&nbsp;<Icon width="1.5rem" icon="tdesign:arrow-right" />
              </button>

              <p className="absolute top-5 left-8 text-black text-[2.2rem] font-title">The Classics</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Genres;
