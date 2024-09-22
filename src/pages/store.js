import React from 'react'
import ProductList from '../components/productpage/ProductList'
import PathLink from '../components/PathLink'
import { useParams } from 'react-router-dom';

function Store() {
  const { category } = useParams()
  console.log(category)

  return (
    <div className="w-full">
      <PathLink />
      <ProductList category={category}/>
    </div>
  )
}

export default Store
