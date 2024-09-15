import React from "react";
import book from '../images/book.png';
import { ReactComponent as CartIcon } from '../svg_icons/cart-white.svg'; // Import as React component
import { ReactComponent as HeartIcon } from '../svg_icons/heart-empty.svg'; // Import as React component
import { ReactComponent as StarIcon } from '../svg_icons/star.svg'; // Import as React component

const Arrivals = () => {
  const books = [
    {
      id: 1,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "€35.80",
      rating: "4.5",
      img: book, 
    },

    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "€35.80",
      rating: "4.5",
      img: book, 
    },
    {
      id: 3,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "€35.80",
      rating: "4.5",
      img: book, 
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "€35.80",
      rating: "4.5",
      img: book, 
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill().map((_, i) => (
          <StarIcon key={`full-${i}`} className="text-yellow-500 w-5 h-5"   style={{ backgroundColor: 'gray' }}/>
        ))}
        {halfStar && <StarIcon className="text-yellow-500 w-5 h-5" />}
        {Array(emptyStars).fill().map((_, i) => (
          <StarIcon key={`empty-${i}`} className="text-gray-300 w-5 h-5" />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-gray-900 font-title text-[36px] ">
            NEW <span className="text-yellow-500">ARRIVALS</span>
          </h2>
          <button className="flex items-center text-gray-700 hover:text-black border border-black border-2 px-4 py-2 rounded-full">
            More products
            <span className="ml-2">→</span>
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-64 object-cover object-center mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  {book.title}
                </h3>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-gray-800 mt-2">{book.price}</p>
                <p className="text-yellow-500 mt-1"> {renderStars(book.rating)}</p>
                <div className="flex items-center gap-5">
                  <button className="px-4 py-2 bg-black text-white rounded-full flex items-center hover:bg-gray-800">
                    Order now
                    <span className="ml-2"><CartIcon /></span>
                  </button>
                  <button className="text-gray-500 hover:text-black ml-1">
                  <HeartIcon /> 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
