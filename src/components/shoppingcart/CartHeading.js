import React from 'react';
import PropTypes from 'prop-types';

const CartHeading = ({ itemCount }) => {
  return (
    <div className="flex flex-row items-center gap-[0.5rem] shopping-cart mt-2 mb-8">
      <span className="font-title text-black text-4xl">Shopping</span>
      <span className="font-title text-primary-dark text-4xl"> Cart</span>
      <span className="font-semibold text-grey-dark text-xl item-count text-md text-black">
        ({itemCount} item{itemCount !== 1 ? 's' : ''})
      </span>
    </div>
  );
};

CartHeading.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartHeading;