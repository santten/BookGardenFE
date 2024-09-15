import React from 'react'
import { useParams } from 'react-router-dom';

import PathLink from '../components/PathLink';
import BookInfoCard from '../components/productpage/BookInfoCard';
import Recommendations from '../components/productpage/Recommendations';
import ReviewArea from '../components/productpage/ReviewArea';

// change to database asap
import bookArray from '../temporary_mock_data'

function ProductPage() {
    const { productID } = useParams();

    // same here: config to match database stuff properly
    const bookinfo = bookArray.filter((item) => item.id === parseInt([productID]))[0]

    return (
        <div className="m-auto max-w-[70vw] min-h-[90vh] pb-[4rem]">
            <PathLink />
            <BookInfoCard key={"bookinfo_for_" + bookinfo.id} bookinfo={bookinfo}/>
            <ReviewArea key={"reviews_for_" + bookinfo.id} bookinfo={bookinfo}/>
            <Recommendations key={"recs_for_" + bookinfo.id} bookinfo={bookinfo}/>
        </div>
    )
}

export default ProductPage
