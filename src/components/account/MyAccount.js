import React, { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount(props) {
  // set active page to be accountdetails if not provided
  const activepage = props.activepage || "accountdetails" 
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);   
    } else {
      setIsAuthenticated(false);  
    }
  }, []); // 只在组件挂载时运行

  const handleLogout = () => {
    console.log('Logging out...');   

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    
    console.log('Token after removal:', localStorage.getItem('token')); 
  
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    setIsAuthenticated(false);
  
    navigate('/');
  };
  

  return (
    <div className="w-60 p-4 bg-grey-light rounded-3xl mx-auto mt-8">
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
         <button 
            onClick={handleLogout} 
            className="text-black hover:text-warning bg-transparent border-none cursor-pointer"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MyAccount;
