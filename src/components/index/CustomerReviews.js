import React from "react";
import { Icon } from "@iconify/react"

import customer1 from '../../images/customer1.png';
import customer2 from '../../images/customer2.png';
import customer3 from '../../images/customer3.png';
import Stars from "../Stars";

const CustomerReviews = () => {
  const customers = [
    {
      id: 1,
      customerName: "Matti Lewinston",
      rating: 5,
      review: "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer1,
    },
    {
      id: 2,
      customerName: "Esther Howard",
      rating: 4.5,
      review: "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer2,
    },
    {
      id: 3,
      customerName: "Jacob Jones",
      rating: 5,
      review: "Lorem ipsum dolor sit amet consectetur. Mauris elit commodo dui nunc consectetur. Leo ut volutpat non fermentum viverra sem. In lacus posuere placerat eu platea. Leo lacus ac suscipit volutpat.",
      img: customer3,
    },
  ];

  return (
    <section className="bg-grey-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black font-title text-[48px]">
            OUR <span className="text-primary-dark">HAPPY CUSTOMERS</span>
          </h2>
          <button className="flex items-center text-black hover:text-black">
            <span className="ml-2"> <Icon icon="tdesign:arrow-left" className="text-black" width="32px"/> </span>
            <span className="ml-2"> <Icon icon="tdesign:arrow-right" className="text-black" width="32px"/> </span>
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="bg-white p-4 rounded-2xl shadow-md flex-none min-w-[25rem] flex-shrink-0"
                style={{ maxHeight: '300px', width: '30rem' }}// style={{ maxHeight: '240px' }} // Set a max height if needed
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
                      {console.log(customer.rating)}
                      <Stars rating={customer} height="24px" background="white" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700" style={{ maxHeight: '6rem' }}>
                  {customer.review}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="absolute inset-0 right-0 bg-grey-light" style={{ width: '10rem', pointerEvents: 'none' }}></div>*/}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
