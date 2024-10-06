import React from 'react';
import genres from '../../images/genres.png';
import genres1 from '../../images/genres-1.png';
import genres2 from '../../images/genres-2.png';
import genres3 from '../../images/genres-3.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Genres = () => {
  return (
    <section className="w-full bg-secondary-light py-12"
      style={{
        backgroundImage: `url(${genres})`,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="container">
        <h1 className="text-center font-title text-5xl text-black text-4xl mb-8">
          <span className="text-black">FIND YOUR BOOK BY</span>
          <span className="text-secondary">&nbsp;GENRE</span>
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {/* Student Books */}
          <div className="relative group">
            <img
              src={genres1}
              alt="Student Books"
              className="object-cover shadow-md rounded-[2rem] w-full h-full"
            />
            <div className="rounded-[2rem] absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <Link
              to="/browse/genre/books%20for%20students/page/1"
              className="text-md font-semibold absolute top-16 md:top-20 left-6 sm:left-8 bg-black hover:text-primary text-white px-6 py-2 rounded-full flex items-center"
            >
              Find more&nbsp;
              <Icon width="1.5rem" icon="tdesign:arrow-right" />
            </Link>

            <p className="absolute top-8 left-8 text-black text-2xl md:text-4xl font-title">FOR STUDENTS</p>
          </div>

          <div className="h-[100%] flex flex-col gap-8 justify-between">
            {/* Children Books */}
            <div className="relative group">
              <img
                src={genres2}
                alt="Children Books"
                className="object-cover shadow-md h-full rounded-[2rem]"
              />
              <div className="rounded-[2rem] absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <Link
                to="/browse/genre/books%20for%20children/page/1"
                className="text-md font-semibold absolute top-16 md:top-20 left-6 sm:left-8 bg-black hover:text-primary text-white px-6 py-2 rounded-full flex items-center"
              >
                Find more&nbsp;
                <Icon width="1.5rem" icon="tdesign:arrow-right" />
              </Link>

              <p className="absolute top-8 left-8 text-black text-2xl md:text-4xl font-title">Children's books</p>
            </div>

            {/* Classic Books */}
            <div className="relative group">
              <img
                src={genres3}
                alt="Classic Books"
                className="object-cover shadow-md rounded-[2rem] w-full h-full"
              />
              <div className="rounded-[2rem] absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <Link
                to="/browse/genre/classics/page/1"
                className="text-md font-semibold absolute top-16 md:top-20 left-6 sm:left-8 bg-black hover:text-primary text-white px-6 py-2 rounded-full flex items-center"
              >
                Find more&nbsp;
                <Icon width="1.5rem" icon="tdesign:arrow-right" />
              </Link>

              <p className="absolute top-8 left-8 text-black text-2xl md:text-4xl font-title">The Classics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;


