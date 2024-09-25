import React from 'react'
import ProductList from '../components/productpage/ProductList'
import PathLink from '../components/PathLink'

function Store() {
  return (
    <div className="w-full">
      <PathLink />
      <ProductList />
    </div>
  )
}

export default Store
