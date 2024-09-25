// components/WishList.js
import React, { useState } from 'react';

import { Icon } from "@iconify/react";

const WishList = () => {
  const [wishList, setWishList] = useState([
    {
      id: 1,
      title: 'Book title 1',
      author: 'Book author 1',
      date: 'October 17, 2023',
      price: '9.90€',
    },
    {
      id: 2,
      title: 'Book title 1',
      author: 'Book author 1',
      date: 'October 17, 2023',
      price: '9.90€',
    },
    {
      id: 3,
      title: 'Book title 1',
      author: 'Book author 1',
      date: 'October 17, 2023',
      price: '9.90€',
    },
  ]);

  const deleteWishList = (id) => {
    setWishList(wishList.filter(item => item.id !== id));  // 修改 WishList 为 wishList
  };

  return (
    <div className="container mx-auto p-2 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-left">WishList</h2>

      <table className="min-w-full overflow-hidden">
        <thead className="text-gray-500 text-lg border-b">
          <tr>
            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Book</th>
            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Date Added</th>
            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Price </th>
            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}> </th>
            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((wishList) => (
            <tr key={wishList.id} className="border-b">
              <td className="py-3 px-4">
                <p className="font-semibold">{wishList.title}</p>
                <p className="text-sm text-gray-600">by {wishList.author}</p>
              </td>
              <td className="py-3 px-4">{wishList.date}</td>
              <td className="py-3 px-4">{wishList.price}</td>
              <td className="py-3 px-4">
                <button className="px-4 py-2 bg-black text-white sm:rounded-full lg:rounded-full flex items-center hover:bg-gray-800">
                  Add to cart
                  <span className="ml-2"> <Icon icon="material-symbols:shopping-cart"></Icon></span>
                </button>
              </td>
              <td className="py-3 px-4">
                <button
                  onClick={() => deleteWishList(wishList.id)}>
                  <Icon icon="mdi:trashcan-outline" width="1.25rem" className="text-black hover:text-warning"></Icon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;