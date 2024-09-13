// src/ShoppingCartItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartItem.css'; // Import the CSS file

function ShoppingCartItem({ item, onAdd, onRemove }) {
  const { title,author,rating, price, image, year, ISBN, language, binding } = item;
  const renderStars = () => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="star full">&#9733;</span>
        ))}
        {halfStar === 1 && <span className="star half">&#9733;</span>}
        {[...Array(maxRating - fullStars - halfStar)].map((_, index) => (
          <span key={`empty-${index}`} className="star empty">&#9734;</span>
        ))}
      </div>
    );
  };
  return (
    <div className="shopping-cart-item">
      <img src={image} alt={title} className="item-image" />
      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        <p className="item-author">{author}</p>
        {renderStars()}<span className="rating-number">({rating.toFixed(1)})</span>
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
