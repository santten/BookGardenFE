// src/ShoppingCartItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartItem.css'; // Import the CSS file
import Stars from '../Stars';

function ShoppingCartItem({ item, onAdd, onRemove, onDelete }) {
  const { title, author, rating, price, image, year, ISBN, language, binding } = item;

  return (
    <div className="shopping-cart-item flex space-x-4 p-4 border-b border-gray-300 relative">
      <img src={image} alt={title} className="item-image w-24 h-24 object-cover" />
      
      <div className="item-details flex-1">
        <h3 className="item-title text-lg font-bold">{title}</h3>
        <p className="item-author text-gray-600">
          {author}
        </p>
        <p className="flex items-center">
          <Stars rating={rating} height="20px" color="black"/>
          <span className="rating-number text-gray-500 ml-2">
          ({rating.toFixed(2)})
          </span>
        </p>
        <p className="item-price text-xl">
          {price.toFixed(2)} €
        </p>
        <p className="item-year text-sm text-gray-500">
          Publishing Year: <span className="font-semibold">{year}</span>
        </p>
        <p className="item-year text-sm text-gray-500">
          ISBN:  <span className="font-semibold"> {ISBN}</span> 
        </p>
        <p className="item-year text-sm text-gray-500">
          Language: <span className="font-semibold">{language}</span>  
        </p>
        <p className="item-year text-sm text-gray-500">
           Binding: <span className="font-semibold">{binding}</span>  
        </p>

        <div className="item-actions">
          <div className="button-container"> {/* Apply background only to buttons */}
            <button 
              onClick={() => onRemove(item)} 
              className="bg-gray-200 hover:bg-gray-300 rounded">
              -
            </button>
            <span className="item-quantity">{item.quantity}</span>
            <button 
              onClick={() => onAdd(item)} 
              className="bg-gray-200 hover:bg-gray-300 rounded">
              +
            </button>
          </div>

          {/* Remove from cart link without background color */}
          <div 
            className="remove-link"
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
    year: PropTypes.string.isRequired,  // Added for publishing year
    isbn: PropTypes.string.isRequired,  // Added for ISBN
    language: PropTypes.string.isRequired,  // Added for language
    binding: PropTypes.string.isRequired,  // Added for binding
    quantity: PropTypes.number.isRequired, // Added for quantity
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ShoppingCartItem;
