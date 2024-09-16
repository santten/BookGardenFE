import React, { useRef } from "react";
import ProductRow from "../ProductRow";
import { Icon } from "@iconify/react";

const BestSellers = () => {
  const newarrivals = [23, 43, 55, 44, 23, 12, 99, 92];
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    // Scroll right when clicking the button
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 w-[90vw] m-auto">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-gray-900 font-title text-[36px]">
          OUR <span className="text-accent">BEST SELLERS</span>
        </h2>
        <button
          onClick={scrollRight}
          className="flex items-center text-black hover:text-black border border-black border-2 px-4 py-2 rounded-full"
        >
          More products
          <span className="ml-2"><Icon icon="tdesign:arrow-right" className="text-black" width="26px" /></span>
        </button>
      </div>
      
      {/* Pass the ref to the ProductRow */}
      <ProductRow ref={scrollContainerRef} items={newarrivals} className="w-full flex space-x-4 " />
    </section>

  );
};

export default BestSellers;


// import React, { useRef } from "react";
// import ProductRow from "../ProductRow";

// const BestSellers = () => {
//   const newarrivals = [23, 43, 55, 44, 23, 12, 99, 92];
//   const scrollContainerRef = useRef(null);

//   const scrollRight = () => {
//     // Scroll right when clicking the button
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 300, // Adjust this value as needed
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="bg-white py-12 w-[90vw] m-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl text-gray-900 font-title text-[36px]">
//           OUR <span className="text-accent">BEST SELLERS</span>
//         </h2>
//         <button
//           onClick={scrollRight}
//           className="flex items-center text-gray-700 hover:text-black border border-black px-4 py-2 rounded-full"
//         >
//           More products
//           <span className="ml-2">→</span>
//         </button>
//       </div>
      
//       {/* Make the product row scrollable */}
//       <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
//         <ProductRow items={newarrivals} className="w-full flex space-x-4" />
//       </div>
//     </section>
//   );
// };

// export default BestSellers;









// import React, { useRef } from "react";
// import ProductRow from "../ProductRow";



// const BestSellers = () => {
//   const newarrivals = [23, 43, 55, 44, 23, 12, 99, 92]
//   const scrollContainerRef = useRef(null);

//   const scrollRight = () => {
//     // Scroll right when clicking the button
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({
//         left: 300,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="bg-white py-12 w-[90vw] m-auto">
//       <h2 className="text-3xl text-gray-900 font-title text-[36px] ">
//         OUR <span className="text-accent">BEST SELLERS</span>
//       </h2>
//       <button
//           onClick={scrollRight} 
//           className="flex items-center text-gray-700 hover:text-black border border-black border-2 px-4 py-2 rounded-full">
//             More products
//             <span className="ml-2">→</span>
//         </button>
//       <ProductRow items={newarrivals} className="w-full" />
//     </section>
//   );
// };

// export default BestSellers;
