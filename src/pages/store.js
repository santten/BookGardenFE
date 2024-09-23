import React from 'react'
import ProductList from '../components/productpage/ProductList'
import PathLink from '../components/PathLink'

function Store() {
  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <PathLink />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl"> {/* 限制宽度为屏幕宽度 */}
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Store
