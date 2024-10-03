import React, { useEffect, useContext } from 'react';
import AuthContext from "./context/AuthContext"

// some general imports
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// navbar contents and basic page components
import NavBar from './components/NavBar';
import Home from './pages/index';
import Contacts from './pages/contacts';
import Footer from './components/Footer';

// product and searching related components
import Search from './pages/search';
import Store from './pages/store';
import ProductPage from './pages/productpage';
import NotFoundPage from './pages/NotFoundPage'


// cart and checkout related components
import Cart from './pages/cart';
import CheckOutPage from './pages/checkOut'

// login and account related components
import Login from './pages/login';
import Signup from './pages/signup';
import AccountDetailsPage from './pages/account/account'
import UserReviews from './pages/account/reviews'
import OrderHistoryPage from './pages/account/orders'
import WishList from './pages/account/wishlist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

  // check for the authentication state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('token');
    storedUser ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [setIsAuthenticated]);

  return (
    <div className="flex flex-col min-h-screen mr-auto ml-auto">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <main className="flex-grow w-full">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse/:category/page/:pagenumber" element={<Store />} />
              <Route path="/browse/search/:query/page/:pagenumber" element={<Store />} />
              <Route path="/browse/genre/:category/page/:pagenumber" element={<Store />} />

              <Route path="/contacts" element={<Contacts />} />
              <Route path="/search" element={<Search />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<CheckOutPage />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {isAuthenticated && <Route path="/account" element={<AccountDetailsPage />} />}
              {isAuthenticated && <Route path="/account/reviews" element={<UserReviews />} />}
              {isAuthenticated && <Route path="/account/orders" element={<OrderHistoryPage />} />}
              {isAuthenticated && <Route path="/account/wishList" element={<WishList />} />}

              <Route path="/products/:productID" element={<ProductPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
