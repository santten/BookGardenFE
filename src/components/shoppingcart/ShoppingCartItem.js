import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars';
import { Icon } from '@iconify/react';
import noCover from "../../images/noCover.svg"

function ShoppingCartItem({ item, apiurl, onAdd, onRemove, onDelete }) {
  const { book, quantity } = item;
  const { title, author, rating, price = 0, image, year, ISBN, language, binding, publisher } = book;

  const cover = image !== undefined ? (apiurl + image) : noCover

  return (
    <div className="shopping-cart-item flex flex-col md:items-start md:flex-row bg-grey-light p-4 md:p-6 mb-4 rounded-[1rem] shadow-sm hover:shadow-md relative">
      <h3 className="md:hidden text-lg my-[0.5rem] font-semibold text-black">
        {title}
      </h3>
      <div className="flex flex-row md:gap-0 gap-[1rem]">
        <img
          src={cover}
          alt={title}
          className="item-image w-36 md:mr-6 mb-4 md:mb-0"
        />

        <div>
          <h3 className="hidden md:block text-lg font-semibold text-black">
            {title}
          </h3>

          <div className="flex flex-col items-left justify-start gap-[0.5rem]">
            <p className="text-grey-dark text-md">
              {author}
            </p>
            {rating > 1 && <div className="flex flex-row items-center gap-[0.25rem]">
              <Stars rating={rating} height="20px" color="black" />
              <span className="rating-number text-grey-dark text-xs">
                ({rating.toFixed(2)})</span></div>}
            <p className="item-year text-sm text-grey-dark">
              Publishing Year: <span className="font-semibold">{year}</span><br />
              {ISBN && <>ISBN: <span className="font-semibold">{ISBN}</span><br /></>}
              {language && <>Language: <span className="font-semibold">{language}</span><br /></>}
              {binding && <>Binding: <span className="font-semibold">{binding}</span><br /></>}
              {publisher && <>Publisher: <span className="font-semibold">{publisher}</span><br /></>}
            </p>
          </div>
        </div>
      </div>

      <div className="ml-auto flex flex-row-reverse md:flex-col items-center md:justify-right w-[100%] md:max-w-min gap-[0.5rem]">
        <p className="ml-auto text-right text-4xl font-semibold text-black">
          {price.toFixed(2)} €
        </p>

        <div className="flex flex-row-reverse md:flex-row mr-auto md:ml-auto gap-[0.5rem] items-center">
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
