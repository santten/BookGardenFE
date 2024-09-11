// App.js
import React from 'react';
import MyAccount from './components/MyAccount';
import AccountDetails from './components/AccountDetails';

function App() {
  return (
    <div className="App flex justify-between">
      <div className="flex-none w-1/4 p-4">
        <MyAccount />
      </div>
      <div className="flex-none w-3/4 p-4">
        <AccountDetails />
      </div>
    </div>
  );
}

export default App;


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
