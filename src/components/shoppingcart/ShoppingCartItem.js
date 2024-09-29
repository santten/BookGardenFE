import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars';

function ShoppingCartItem({ item, onAdd, onRemove, onDelete }) {
  const { title, author, rating, price, image, year, ISBN, language, binding, quantity } = item;

  return (
    <div className="shopping-cart-item flex flex-col md:flex-row bg-[#F5F4F3] p-4 md:p-6 mb-4 rounded-lg shadow-lg border border-gray-300 relative">
      <img 
        src={image} 
        alt={title} 
        className="item-image w-36 h-48 object-cover rounded-md md:mr-6 mb-4 md:mb-0" 
      />
      
      <div className="item-details flex-1 relative">
        <h3 className="item-title text-lg font-bold text-gray-800 sm:text-xl md:text-2xl">
          {title}
        </h3>
        <p className="item-author text-gray-600 text-sm sm:text-base">
          {author}
        </p>
        <p className="flex items-center my-2">
          <Stars rating={rating} height="20px" color="black" />
          <span className="rating-number text-gray-500 text-xs sm:text-sm ml-2">
            ({rating.toFixed(2)})
          </span>
        </p>
        <p className="item-price text-2xl sm:text-3xl font-semibold text-gray-800 my-2">
          {price.toFixed(2)} €
        </p>
        <p className="item-year text-sm text-gray-500">
          Publishing Year: <span className="font-semibold">{year}</span>
        </p>
        <p className="item-isbn text-sm text-gray-500">
          ISBN: <span className="font-semibold">{ISBN}</span>
        </p>
        <p className="item-language text-sm text-gray-500">
          Language: <span className="font-semibold">{language}</span>
        </p>
        <p className="item-binding text-sm text-gray-500">
          Binding: <span className="font-semibold">{binding}</span>
        </p>

        <div className="item-actions flex flex-col md:items-end mt-4">
          <div className="button-container flex items-center space-x-2 bg-gray-200 p-2 rounded-md border border-gray-300">
            <button 
              onClick={() => onRemove(item)} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-md"
            >
              -
            </button>
            <span className="item-quantity text-gray-800">{quantity}</span>
            <button 
              onClick={() => onAdd(item)} 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-md"
            >
              +
            </button>
          </div>

          <div 
            className="remove-link text-black-600 mt-2 text-sm sm:text-base cursor-pointer hover:text-red-800"
            onClick={() => onDelete(item)}
          >
            Remove from Cart
          </div>
        </div>
      </div>
    </div>
  );
}

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    ISBN: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    binding: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
