import React from 'react'
import ProductList from '../components/productpage/ProductList'
import PathLink from '../components/PathLink'
import { useParams } from 'react-router-dom';

function Store() {
  const { category, pagenumber } = useParams()

  return (
    <div className="w-full">
      <PathLink />
      <ProductList category={category} pagenumber={pagenumber}/>
    </div>
  )
}

export default Store
