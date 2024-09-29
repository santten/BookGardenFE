import React from 'react';
import PropTypes from 'prop-types';

const CartHeading = ({ itemCount }) => {
  return (
    <div className="shopping-cart font-bold text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-8 ml-4 sm:ml-8 lg:ml-20">
      <span className="block">Shopping Cart</span>
      <span className="item-count text-black-500">
        ({itemCount} item{itemCount !== 1 ? 's' : ''})
      </span>
    </div>
  );
};

CartHeading.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartHeading;
