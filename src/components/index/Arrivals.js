import React from "react";
import ProductRow from "../ProductRow";
import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Arrivals = () => {
  const newarrivals = [1, 2, 43, 55, 64, 21]

  return (
    <section className="bg-white py-12">
      <div className="containerBig">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl text-gray-900 font-title text-[36px] ">
            NEW <span className="text-primary-dark">ARRIVALS</span>
          </h2>
          <Link to="/store"
            className="flex items-center text-black hover:text-primary-dark font-semibold hover:border-primary-dark border border-black border-2 px-4 py-2 rounded-full">
            More products
            <Icon className="ml-2" icon="tdesign:arrow-right" width="26px" />
          </Link>
        </div>

        <ProductRow items={newarrivals} className="w-full" />
      </div>
    </section>

  );
};

export default Arrivals;