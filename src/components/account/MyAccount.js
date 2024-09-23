import React from 'react';

function MyAccount(props) {
  // set active page to be accountdetails if not provided
  const activepage = props.activepage || "accountdetails" 
  
  return (
    <div className="w-full sm:w-60 p-4 bg-grey-light rounded-3xl mx-auto mt-8">
      <h2 className="font-title text-[1.5rem] mb-4">My Account</h2>
      <ul className="space-y-2 text-black">
        <li>
          <a href="/account" className={activepage === "accountdetails" ? "font-bold hover:text-secondary" : "font-regular hover:text-primary-dark"}>Account Details</a>
        </li>
        <li>
          <a href="/account/orders" className={activepage === "pastorders" ? "font-bold hover:text-secondary" : "font-regular hover:text-primary-dark"}>Orders</a>
        </li>
        <li>
          <a href="/account/wishlist" className={activepage === "wishlist" ? "font-bold hover:text-secondary" : "font-regular hover:text-primary-dark"}>Wishlist</a>
        </li>
        <li>
          <a href="/account/reviews" className={activepage === "accountreviews" ? "font-bold hover:text-secondary" : "font-regular hover:text-primary-dark"}>Reviews</a>
        </li>
        <li className="pt-8">
          <a href="/" className="text-black hover:text-warning">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default MyAccount;
