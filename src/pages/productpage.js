import React from 'react'
import { useParams } from 'react-router-dom';

import PathLink from '../components/PathLink';
import BookInfoCard from '../components/productpage/BookInfoCard';
import Recommendations from '../components/productpage/Recommendations';
import ReviewArea from '../components/productpage/ReviewArea';

// change to database asap
import bookArray from '../temporary_mock_data'
import reviewArray from '../temporary_reviewdata'


function ProductPage() {
    const { productID } = useParams();

    // same here: config to match database stuff properly
    const bookinfo = bookArray.filter((item) => item.id === parseInt([productID]))[0]

    // retrieve reviews 
    const reviews = reviewArray.filter((item) => item.book_id === parseInt([productID]))

    return (
        <div className="m-auto min-h-[90vh] pb-[4rem]">
            <PathLink />
            <BookInfoCard key={"bookinfo_for_" + bookinfo.id} bookinfo={bookinfo} />
            <ReviewArea className="bg-accent" key={"reviews_for_" + bookinfo.id} reviewlist={reviews} avg_rating={bookinfo.rating} />
            <div className="max-w-[70vw] m-auto">
                <Recommendations key={"recs_for_" + bookinfo.id} bookinfo={bookinfo} />
            </div>
        </div>
    )
}

export default ProductPage
