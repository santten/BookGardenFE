import React from 'react';
import about from '../../images/about.png';

function About() {
  return (
    <section className="bg-grey-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="container flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-title">
            <span className="block">WELCOME TO</span>
            <span className="block text-primary-dark">BOOK GARDEN!</span>
          </h1>
        </div>

        <div className="md:w-1/2">
          <p className="text-base sm:text-lg md:text-xl text-black">
            Nestled in the heart of literary inspiration, Book Garden is more than just a bookstore—it's a haven where stories bloom and minds flourish. 
            Designed as part of a web programming project for <span className="text-warning font-bold">Metropolia</span>'s Autumn 2024 course, our online bookstore aims to cultivate a community of readers who thrive on curiosity, creativity, and knowledge. 
            From timeless classics to contemporary bestsellers, our carefully curated collection offers something for every book lover. 
            Explore our digital shelves, and let your imagination grow in the vibrant, ever-blooming world of Book Garden.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;