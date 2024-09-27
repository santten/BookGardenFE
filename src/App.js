// App.js

import React, { useState, useEffect } from 'react'; 

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
import AccountDetailsPage from './pages/account/account'
import UserReviews from './pages/account/reviews'
import OrderHistoryPage from './pages/account/orders'
import WishList from './pages/account/wishlist'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    // check for the authentication state from localStorage
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setIsAuthenticated(true);  // If user data is found in localStorage, set isAuthenticated to true
      }
    }, []);

  return (
    <div className="flex flex-col min-h-screen mr-auto ml-auto">
      <BrowserRouter>
      <ToastContainer />
      <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
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
              <Route path="/payment" element={<CheckOutPage/>} />

              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />


              <Route path="/account" element={<AccountDetailsPage />} />
              <Route path="/account/reviews" element={<UserReviews />} />
              <Route path="/account/orders" element={<OrderHistoryPage />} />
              <Route path="/account/wishList" element={<WishList />} />

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
