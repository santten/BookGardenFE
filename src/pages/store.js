import React from 'react'
import ProductList from '../components/ProductList'
import PathLink from '../components/PathLink'

function store() {
  return (
    <div className="w-full min-h-[90vh]">
      <PathLink />
      <ProductList category="Our Best Sellers"/>
    </div>
  )
}

export default store