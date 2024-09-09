import React from 'react'
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { productID } = useParams();

    console.log(productID)

    return (
        <div className="w-full py-[4rem] text-center h-[80vh]">
            hello from productpage {productID}
        </div>
    )
}

export default ProductPage
