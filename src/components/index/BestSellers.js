import React from "react";
import ProductRow from "../ProductRow";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"

const BestSellers = () => {
  const newarrivals = [23, 43, 55, 44, 20, 12, 99, 92];
  return (
    <section className="bg-white py-12">
      <div className="containerBig">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-gray-900 font-title text-[36px]">
            OUR <span className="text-accent">BEST SELLERS</span>
          </h2>
          <Link to="/store"
            className="flex items-center font-semibold text-black hover:text-accent hover:border-accent border border-black border-2 px-4 py-2 rounded-full">
            More products
            <Icon icon="tdesign:arrow-right" width="26px" className="ml-2"/>
          </Link>
        </div>

        <ProductRow items={newarrivals} className="w-full flex space-x-4" />
      </div>
    </section>

  );
};

export default BestSellers;