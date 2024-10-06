import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './context/AuthContextProvider';
import WishListContextProvider from './context/WishListContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WishListContextProvider>
        <App />
      </WishListContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();