import React from 'react'
import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

function AddToCartButton({ book_id }) {
  const apiurl = process.env.REACT_APP_API_URL

   // Update the shopping cart
  const addToCart = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) {
      toast.error('Please login.');
      return null; 
    }
    fetch(`${apiurl}/api/cart/add`, {   
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: book_id,
        quantity: 1  
    
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Cart update:', data);
      toast.success('Book added to shopping cart successfully');
    })
    .catch(error => {
      console.error('Error adding book to cart:', error);
      toast.error('Failed to add book to shopping cart');
    });
  };

  const handleAddToCart = () => {
    console.log('Add to cart button clicked'); //Test
    addToCart();   
  }

  return (
    <div onClick={handleAddToCart}
      className="text-center flex flex-row items-center px-[0.75rem] md:px-[1rem] py-[0.5rem] bg-black w-max rounded-[99px] hover:bg-secondary">
      <p className="text-base text-white font-semibold inline">Add To Cart&ensp;</p>
      <Icon icon="material-symbols:shopping-cart" width="1.25rem" className="text-white inline" />
    </div>
  )
}

export default AddToCartButton;