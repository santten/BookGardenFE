import React from "react";
import ProductRow from "../ProductRow";

const BestSellers = () => {
  const newarrivals = [23, 43, 55, 44, 23, 12, 99, 92]
  return (
    <section className="bg-white py-12 w-[90vw] m-auto">
      <h2 className="text-3xl text-gray-900 font-title text-[36px] ">
        OUR <span className="text-accent">BEST SELLERS</span>
      </h2>
      <ProductRow items={newarrivals} className="w-full" />
    </section>
  );
};

export default BestSellers;
