// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import NavBar from './components/NavBar';

import Home from './pages/index'
import Store from './pages/store'
import Contacts from './pages/contacts'
import Search from './pages/search'
import Cart from './pages/cart'
import Login from './pages/login'

import AccountDetailsPage from './pages/AccountDetailsPage';
import OrderHistoryPage from './pages/orders';
import UserReviews from './pages/reviews';
import WishList from './pages/wishlist';

import CheckOutPage from './pages/checkOut'; 

import ProductPage from "./pages/productpage";

import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="mr-auto ml-auto">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/search" element={<Search />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<CheckOutPage/>} />


            <Route path="/login" element={<Login />} />

            <Route path="/account" element={<AccountDetailsPage />} />
            <Route path="/account/reviews" element={<UserReviews />} />
            <Route path="/account/orders" element={<OrderHistoryPage />} />
            <Route path="account/wishList" element={<WishList />} />

            <Route path="/products/:productID" element={<ProductPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
