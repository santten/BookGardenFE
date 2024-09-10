import React from 'react'
import { useParams } from 'react-router-dom';

import PathLink from '../components/PathLink';
import BookInfoCard from '../components/productpage/BookInfoCard';

// change to database asap
import bookArray from '../temporary_mock_data'

function ProductPage() {
    const { productID } = useParams();

    // same here: config to match database stuff properly
    const bookinfo = bookArray.filter((item) => item.id == [productID])[0]

    console.log(productID, bookinfo.title)

    return (
        <div className="mx-[10vw] min-w-[80vw] min-h-[90vh]">
            <PathLink />
            <BookInfoCard key={bookinfo.id} bookinfo={bookinfo}/>
        </div>
    )
}

export default ProductPage
