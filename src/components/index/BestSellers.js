import { useEffect, useState } from "react";
import ProductRow from "../ProductRow";
import { Icon } from "@iconify/react";

import useLoadingComponent from "../../customHooks/useLoadingComponent"
import { Link } from "react-router-dom";

const BestSellers = () => {
  
  const before_loading = "status: loading"
  const [bestSellers, setBestSellers] = useState(before_loading)
  const isLoading = bestSellers === before_loading;

  useEffect(() => {
    fetch((process.env.REACT_APP_API_URL + `/api/books/topsellers`), {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setBestSellers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="containerBig">
        <div className="flex md:flex-row flex-col gap-[1rem] justify-between items-center mb-4">
          <h2 className="text-3xl text-gray-900 font-title text-[36px]">
            OUR <span className="text-accent">TOP SELLERS</span>
          </h2>
          <Link to="/browse/genre/topsellers/page/1"
            className="flex items-center text-black hover:text-primary-dark font-semibold hover:border-primary-dark border border-black border-2 px-4 py-2 rounded-full">
            See more
            <Icon className="ml-2" icon="tdesign:arrow-right" width="26px" />
          </Link>
        </div>

        {useLoadingComponent(isLoading, "Loading book information...",
          ProductRow, { items: bestSellers })}
          
      </div>
    </section>

  );
};

export default BestSellers;