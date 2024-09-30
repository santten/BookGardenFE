import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyAccount = ({ setIsAuthenticated }) => {
  // set active page to be accountdetails if not provided
  const activepage = "accountdetails";
  
  const navigate = useNavigate();

  const handleLogout = (e) => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    toast.success('Logout successful. Thank you for visiting! 👋');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
