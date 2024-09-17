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

// cart and checkout related components
import Cart from './pages/cart';
import CheckOutPage from './pages/checkOut'

// login and account related components
import Login from './pages/login';
import AccountDetailsPage from './pages/AccountDetailsPage'
import UserReviews from './pages/reviews'
import OrderHistoryPage from './pages/orders'
import WishList from './pages/wishlist'

function App() {
  return (
    <div className="flex flex-col min-h-screen mr-auto ml-auto">
      <BrowserRouter>
        <NavBar />
        <main className="flex-grow w-full">
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
              <Route path="/account/wishList" element={<WishList />} />

              <Route path="/products/:productID" element={<ProductPage />} />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
