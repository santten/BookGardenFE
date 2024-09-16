import React, { useRef } from "react";
import { Icon } from "@iconify/react";

import customer1 from "../../images/customer1.png";
import customer2 from "../../images/customer2.png";
import customer3 from "../../images/customer3.png";
import Stars from "../Stars";

const CustomerReviews = () => {
  const scrollContainerRef = useRef(null); // Use ref for scrolling

  const customers = [
    {
      id: 1,
      customerName: "Matti Lewinston",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer1,
    },
    {
      id: 2,
      customerName: "Esther Howard",
      rating: 4.5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer2,
    },
    {
      id: 3,
      customerName: "Jacob Jones",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer3,
    },
    {
      id: 4,
      customerName: "Jacob Jones",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer3,
    }
  ];

  const scrollLeft = () => {
    // Scroll left when clicking the button
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    // Scroll right when clicking the button
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-grey-light py-12">
      <div className="pl-8 pr-0 sm:pl-6 sm:pl-12 sm:pr-0 lg:pl-16 lg:pr-0">  
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black font-title text-[48px]">
            OUR <span className="text-primary-dark">HAPPY CUSTOMERS</span>
          </h2>
          <div className="flex items-center">
            <button
              onClick={scrollLeft}
              className="pr-10 flex items-center text-black hover:text-black"
            >
              <Icon icon="tdesign:arrow-left" className="text-black" width="32px" />
            </button>
            <button
              onClick={scrollRight}
              className="pr-10 flex items-center text-black hover:text-black"
            >
              <Icon icon="tdesign:arrow-right" className="text-black" width="32px" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef} // Reference the scrollable container
            className="flex space-x-4 pb-4 pr-0 gap-[30px] overflow-x-auto scrollbar-hide overflow-y-hidden"
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}  // Ensures the last card aligns with the page edge
          >
            {customers.map((customer, index) => (
              <div
                key={customer.id}
                className={`bg-white p-10 rounded-3xl shadow-md flex-none min-w-[25rem] ${
                  index === customers.length - 1 ? "mr-0" : "mr-1"
                } h-96`} // Remove margin-right for the last card
                style={{ maxHeight: "300px", width: "30rem" }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={customer.img}
                    alt={customer.customerName}
                    className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {customer.customerName}
                    </h3>
                    <div>
                      <Stars rating={customer.rating} height="24px" background="white" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700" style={{ maxHeight: "6rem" }}>
                  {customer.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

// import React, { useRef } from "react";
// import { Icon } from "@iconify/react"

// import customer1 from '../../images/customer1.png';
// import customer2 from '../../images/customer2.png';
// import customer3 from '../../images/customer3.png';
// import Stars from "../Stars";

// const CustomerReviews = () => {
//   const scrollContainerRef = useRef(null); 

//   //mock customer reviews
//   const customers = [
//     {
//       id: 1,
//       customerName: "Matti Lewinston",
//       rating: 5,
//       review: "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
//       img: customer1,
//     },
//     {
//       id: 2,
//       customerName: "Esther Howard",
//       rating: 4.5,
//       review: "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
//       img: customer2,
//     },
//     {
//       id: 3,
//       customerName: "Jacob Jones",
//       rating: 5,
//       review: "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
//       img: customer3,
//     },
//   ];

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: -100,  
//         behavior: "smooth",  
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 100,  
//         behavior: "smooth",  
//       });
//     }
//   };

//   return (
//     <section className="bg-grey-light py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-black font-title text-[48px]">
//             OUR <span className="text-primary-dark">HAPPY CUSTOMERS</span>
//           </h2>
//           <div className="flex items-center">
//             <button onClick={scrollLeft} className="flex items-center text-black hover:text-black">
//               <Icon icon="tdesign:arrow-left" className="text-black" width="32px" />
//             </button>
//             <button onClick={scrollRight} className="flex items-center text-black hover:text-black ml-4">
//               <Icon icon="tdesign:arrow-right" className="text-black" width="32px" />
//             </button>
//           </div>
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             ref={scrollContainerRef}   
//             className="flex space-x-4 pb-4 scrollbar-hide overflow-x-auto" //"flex overflow-x-auto space-x-4 pb-4"
//           >
//             {customers.map((customer, index) => (
//               <div
//               className={`bg-white p-4 rounded-2xl shadow-md flex-none min-w-[25rem] ${
//                 index === customers.length - 1 ? "mr-0" : "mr-4"
//               }`} // 对最后一个卡片移除 margin-right
//               style={{ maxHeight: "300px", width: "30rem" }} // Set a max height if needed
//             >
//               {/* //   key={customer.id}
//               //   className="bg-white p-4 rounded-2xl shadow-md flex-none min-w-[25rem] flex-shrink-0"
//               //   style={{ maxHeight: '300px', width: '30rem' }} // Set a max height  
//               // > */}
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={customer.img}
//                     alt={customer.customerName}
//                     className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
//                   />
//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-bold text-gray-900">
//                       {customer.customerName}
//                     </h3>
//                     <div>
//                       <Stars rating={customer.rating} height="24px" background="white" />
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700" style={{ maxHeight: '6rem' }}>
//                   {customer.review}
//                 </p>
//               </div>
//             ))
//             }
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerReviews;