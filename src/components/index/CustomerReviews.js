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
    <section className="py-12 max-w-max mx-auto">
      <div className="flex justify-between items-center mb-8">

        <h2 className="ml-[25px] text-3xl text-black font-title text-[48px]">
          OUR <span className="text-primary-dark">HAPPY CUSTOMERS</span>
        </h2>

        <div className="hidden md:flex items-center">
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

      <div>
        <div
          ref={scrollContainerRef} // Reference the scrollable container
          className="flex space-x-4 pb-4 pr-0 gap-[30px] overflow-x-auto scrollbar-hide overflow-y-hidden px-[1rem]"
          >
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className={`bg-white hover:shadow-lg p-10 rounded-3xl shadow-md flex-none max-h-[300px] min-w-[25rem] max-w-[28rem] ${index === customers.length - 1 ? "mr-0" : "mr-1"
                } h-96`} // Remove margin-right for the last card
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
    </section>
  );
};

export default CustomerReviews;