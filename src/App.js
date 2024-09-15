// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import AccountDetailsPage from './pages/AccountDetailsPage';
import OrderHistoryPage from './pages/orders';
import UserReviews from './pages/reviews';
import WishList from './pages/wishlist';
import Footer from './components/Footer';  

import './App.css';


function App() {
  return (
    <div className="mr-auto ml-auto">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/reviews" element={<UserReviews />} />
          <Route path="/account-details" element={<AccountDetailsPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
// import MyAccount from './components/MyAccount';
// import UserReviews from './components/UserReviews';
// import OrderHistory from './components/OrderHistory';
// import WishList from './components/WishList';

// function App() {
//   return (
//     <div className="App flex justify-between">
//       <div className="flex-none w-1/4 p-4">
//         <MyAccount />
//       </div>
//       <div className="flex-none w-3/4 p-4">
//         <UserReviews />
//         <WishList />
//         <OrderHistory />

//       </div>
//     </div>
//   );
// }

// export default App;


// // App.js
// import React from 'react';
// import MyAccount from './components/MyAccount';
// import AccountDetails from './components/AccountDetails';

// function App() {
//   return (
//     // <div className="mr-auto ml-auto">
//     <div>
//     {/* <BrowserRouter> */}
//       <MyAccount/>
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/store" element={<Store />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//       </Routes> */}
//       <AccountDetails /> 
//     {/* </BrowserRouter> */}
//   </div>
//     // <div className="App flex">
//     //   <div className="flex-1 p-4">
//     //     <MyAccount />
//     //   </div>
//     //   <div className="flex-2 p-4">
//     //     <AccountDetails />
//     //   </div>
//     // </div>
//   );
// }


// export default App;


// // // App.js
// // import React from 'react';
// // import MyAccount from './components/MyAccount'; 
// // import AccountDetails from './components/AccountDetails'; 

// // function App() {
// //   return (
// //     <div className="App">
// //       <MyAccount /> {/* 使用MyAccount组件 */}
// //       <AccountDetails/>
// //     </div>
// //   );
// // }

// // export default App;
