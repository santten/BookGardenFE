// src/ShoppingCartItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartItem.css'; // Import the CSS file
import Stars from '../Stars';

function ShoppingCartItem({ item, onAdd, onRemove, onDelete }) {
  const { title, author, rating, price, image, year, ISBN, language, binding, quantity } = item;

  return (
    <div className="shopping-cart-item flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 p-4 border-b border-gray-300 relative">
      <img src={image} alt={title} className="item-image w-24 h-24 object-cover" />
      
      <div className="item-details flex-1">
        <h3 className="item-title text-lg font-bold">{title}</h3>
        <p className="item-author text-gray-600">
          {author}
        </p>
        <p className="flex items-center">
          <Stars rating={rating} height="20px" color="black" />
          <span className="rating-number text-gray-500 ml-2">
            ({rating.toFixed(2)})
          </span>
        </p>
        <p className="item-price text-xl mt-2 md:mt-4">
          {price.toFixed(2)} €
        </p>
        <p className="item-year text-sm text-gray-500">
          Publishing Year: <span className="font-semibold">{year}</span>
        </p>
        <p className="item-year text-sm text-gray-500">
          ISBN: <span className="font-semibold"> {ISBN}</span> 
        </p>
        <p className="item-year text-sm text-gray-500">
          Language: <span className="font-semibold">{language}</span>  
        </p>
        <p className="item-year text-sm text-gray-500">
          Binding: <span className="font-semibold">{binding}</span>  
        </p>

        <div className="item-actions mt-4 md:mt-0 flex flex-col items-start md:items-end">
          <div className="button-container flex items-center space-x-2">
            <button 
              onClick={() => onRemove(item)} 
              className="bg-gray-200 hover:bg-gray-300 rounded-md">
              -
            </button>
            <span className="item-quantity">{quantity}</span>
            <button 
              onClick={() => onAdd(item)} 
              className="bg-gray-200 hover:bg-gray-300 rounded-md">
              +
            </button>
          </div>

          {/* Remove from cart link without background color */}
          <div 
            className="remove-link text-red-600 mt-2 cursor-pointer hover:text-red-800"
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
    year: PropTypes.string.isRequired,  // Publishing year
    ISBN: PropTypes.string.isRequired,  // ISBN (Uppercase to match the object)
    language: PropTypes.string.isRequired,  // Language
    binding: PropTypes.string.isRequired,  // Binding
    quantity: PropTypes.number.isRequired, // Quantity
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,  // Added PropTypes for onDelete
};

export default ShoppingCartItem;
