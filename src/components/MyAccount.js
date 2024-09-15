import React from 'react';

function MyAccount() {
  return (
    <div className="w-60 h-80 p-4 bg-grey-light rounded-3xl mx-auto my-8">
      <h2 className="font-bold font-title text-[32px] text-xl mb-4">MY ACCOUNT</h2>
      <ul  className="space-y-4">
      {/*  */}
        <hr className="border-t-2 border-black w-50 mx-auto my-2" />
        <li>
          <a href="/account" className="font-bold text-black hover:underline">Account Details</a>
        </li>
        <li>
          <a href="/account/orders" className="text-black hover:underline">Orders</a>
        </li>
        <li>
          <a href="/account/wishlist" className="text-black hover:underline">Wishlist</a>
        </li>
        <li>
          <a href="/account/reviews" className="text-black hover:underline">Reviews</a>
        </li>
        <li className="pt-8">
          <a href="/logout" className="text-black hover:underline">Logout</a>
        </li>
        </ul>
    </div>
  );
}

export default MyAccount;
