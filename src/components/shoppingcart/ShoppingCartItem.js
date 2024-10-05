import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars';
import { Icon } from '@iconify/react';

function ShoppingCartItem({ item, apiurl, onAdd, onRemove, onDelete }) {
  // const { title, author, rating = 0, price = 0, image, year, ISBN, language, binding, quantity } = item;
  const { book, quantity } = item;
  const { title, author, rating = 0, price = 0, image, year, ISBN, language, binding } = book;
  const imageUrl = `${apiurl}${image}`;

  return (
    <div className="shopping-cart-item flex flex-col md:items-start md:flex-row bg-grey-light p-4 md:p-6 mb-4 rounded-[2rem] border-[2px] border-grey relative">
      <div className="grid grid-cols-[50%_50%] md:flex">
        <img
          src={imageUrl}
          alt={title}
          className="item-image w-36 h-48 object-cover rounded-md md:mr-6 mb-4 md:mb-0"
        />
        <h3 className="md:hidden text-lg font-semibold text-black">
          {title}
        </h3>
      </div>

      <div>
        <h3 className="text-lg hidden md:block font-semibold text-black">
          {title}
        </h3>

        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <p className="text-grey-dark text-md">
            {author}
          </p>
          <Stars rating={rating} height="20px" color="black" />
          <span className="rating-number text-grey-dark text-xs">
            ({rating.toFixed(2)})
          </span>
        </div>

        <div>
          <p className="item-year text-sm text-grey-dark">
            Publishing Year: <span className="font-semibold">{year}</span><br />
            ISBN: <span className="font-semibold">{ISBN}</span><br />
            Language: <span className="font-semibold">{language}</span><br />
            Binding: <span className="font-semibold">{binding}</span><br />
          </p>
        </div>
      </div>

      <div className="ml-auto flex flex-col-reverse md:flex-col gap-[0.5rem]">
        <p className="ml-auto text-right text-4xl font-semibold text-black">
          {price.toFixed(2)} €
        </p>
        <div className="flex flex-row gap-[0.5rem] items-center mt-4">
          <div className="text-[16px] rounded-[1rem] border-[2px] border-grey flex flex-row items-center overflow-hidden">
            <button
              className="px-[0.75rem] py-[0.25rem] hover:bg-grey"
              onClick={() => onRemove(item)}>
              -
            </button>
            <span className="px-[0.75rem] py-[0.25rem] font-semibold">
              {quantity}</span>
            <button
              className="px-[0.75rem] py-[0.25rem] hover:bg-grey"
              onClick={() => onAdd(item)}>
              +
            </button>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => onDelete(item)}>
            <Icon icon="mdi:trashcan-outline" className="text-black hover:text-warning" width="32px"></Icon>
          </div>
        </div>
      </div>
    </div>
  );
}

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    book: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      year: PropTypes.string.isRequired,
      ISBN: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      binding: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  apiurl: PropTypes.string.isRequired,   
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default ShoppingCartItem;
