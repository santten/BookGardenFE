import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
        
        <div className="text-center md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 " style={{ fontFamily: "'Koulen', sans-serif" }}>
            <span className="block">WELCOME TO</span>
            <span className="block text-teal-500">BOOK GARDEN!</span>
          </h1>
        </div>

        <div className="md:w-1/2">
          <p className="text-lg text-gray-500">
            Nestled in the heart of literary inspiration, Book Garden is more than just a bookstore—it's a haven where stories bloom and minds flourish. 
            Designed as part of a web programming project for <span className="text-red-500">Metropolia</span>'s Autumn 2024 course, our online bookstore aims to cultivate a community of readers who thrive on curiosity, creativity, and knowledge. 
            From timeless classics to contemporary bestsellers, our carefully curated collection offers something for every book lover. 
            Explore our digital shelves, and let your imagination grow in the vibrant, ever-blooming world of Book Garden.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
