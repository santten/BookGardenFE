import Filtering from './Filtering'
import Product from './Product'

import React from 'react'

function ProductList({ category }) {
    return (
        <div className="grid grid-cols-[20%_80%] max-w-[90vw] ml-auto mr-auto">
            <div className="bg-accent">
                <Filtering />
            </div>
            <div className="bg-warning">
                {/* the auto value is just something until I know how the dropdown will be like */}
                <header className="grid grid-cols-[auto_300px]"> 
                    <h3 className="font-title text-[40px]">{category}</h3>
                    <p>this will be dropdown</p>
                </header>
                    <Product />
            </div>
        </div>
    )
}

export default ProductList