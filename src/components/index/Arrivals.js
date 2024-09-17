import React, { useRef } from "react";
import ProductRow from "../ProductRow";
import { Icon } from "@iconify/react";

const Arrivals = () => {
  const newarrivals = [1, 2, 43, 55, 64, 21]
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
    <section className="bg-white py-12">
      <div className="containerBig">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-gray-900 font-title text-[36px] ">
            NEW <span className="text-primary-dark">ARRIVALS</span>
          </h2>
          <button
            onClick={scrollRight}
            className="flex items-center text-gray-700 hover:text-black border border-black border-2 px-4 py-2 rounded-full"
          >
            More products
            <span className="ml-2"><Icon icon="tdesign:arrow-right" className="text-black" width="26px" /></span>
          </button>
        </div>

        <ProductRow ref={scrollContainerRef} items={newarrivals} className="w-full" />
      </div>
    </section>

  );
};

export default Arrivals;