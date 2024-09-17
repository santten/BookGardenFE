import React from 'react';

function MyAccount(props) {
  // set active page to be accountdetails if not provided
  const activepage = props.activepage || "accountdetails" 
  
  return (
    <div className="w-60 h-80 p-4 bg-grey-light rounded-3xl mx-auto my-8">
      <h2 className="font-title text-[1.5rem] mb-4">MY ACCOUNT</h2>
      <ul className="space-y-4 text-black">
        <hr className="border-t-4 border-grey w-50 mx-auto my-2" />
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
          <a href="/logout" className="text-black hover:text-warning">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default MyAccount;
