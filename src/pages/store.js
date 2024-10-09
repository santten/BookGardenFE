import React from 'react'
import ProductList from '../components/productpage/ProductList'
import { useParams } from 'react-router-dom';

function Store() {
  const { category, pagenumber, query } = useParams()

  return (
    <div className="w-full">
      {category ? <ProductList category={category} pagenumber={pagenumber} /> :
        <ProductList category="search" query={query} pagenumber={pagenumber} />}
    </div>
  )
}

export default Store
