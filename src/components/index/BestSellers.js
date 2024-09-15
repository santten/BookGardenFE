import React from "react";
import ProductRow from "../ProductRow";

import { ReactComponent as CartIcon } from '../../svg_icons/cart-white.svg'; // Import as React component
import { ReactComponent as HeartIcon } from '../../svg_icons/heart-empty.svg'; // Import as React component
import { ReactComponent as StarIcon } from '../../svg_icons/star.svg'; // Import as React component

const BestSellers = () => {
  const newarrivals = [23, 43, 55, 44, 231, 123, 99, 92]
  return (
    <section className="bg-white py-12 w-[90vw] m-auto">
      <h2 className="text-3xl text-gray-900 font-title text-[36px] ">
        NEW <span className="text-primary-dark">BEST SELLERS</span>
      </h2>
      <ProductRow items={newarrivals} className="w-full" />
    </section>
  );
};

export default BestSellers;
