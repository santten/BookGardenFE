// src/ShoppingCartItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartItem.css'; // Import the CSS file
import Stars from '../Stars';

function ShoppingCartItem({ item, onAdd, onRemove }) {
  const { title, author, rating, price, image, year, ISBN, language, binding } = item;
  
  return (
    <div className="shopping-cart-item">
      <img src={image} alt={title} className="item-image" />
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <p className="item-author">{author}</p>
        <p><Stars rating={rating} height="20px"/><span className="rating-number">({rating.toFixed(2)})</span></p>
        <p className="item-price">${price.toFixed(2)}</p>
        <p className="item-year">Publishing Year: {year}</p>
        <p className="item-isbn">ISBN: {ISBN}</p>
        <p className="item-language">Language: {language}</p>
        <p className="item-binding">Binding: {binding}</p>

        <div className="item-actions">
          <button onClick={() => onRemove(item)}>-</button>
          <span className="item-quantity">{item.quantity}</span> {/* Display quantity */}
          <button onClick={() => onAdd(item)}>+</button>
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
