import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/index';
import Store from './pages/store';
import Contacts from './pages/contacts';
import Search from './pages/search';
import Cart from './pages/cart';
import Login from './pages/login';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className="mr-auto ml-auto">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
