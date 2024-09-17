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
    
    // sprint 3 
    const handleReadMoreReviews = () => {
        // Logic to navigate to a page or load more reviews
        console.log("Read more reviews clicked!");
    };


    return (
        <div className="m-auto min-h-[90vh] pb-[4rem]">
            <PathLink />
            <BookInfoCard key={"bookinfo_for_" + bookinfo.id} bookinfo={bookinfo} />
            <ReviewArea className="bg-accent" key={"reviews_for_" + bookinfo.id} reviewlist={reviews} avg_rating={bookinfo.rating} />
            <div className="text-center mt-0 bg-grey-light">
                <button 
                onClick={handleReadMoreReviews} 
                className="px-6 py-2 mb-6 text-gray-800 border border-2 border-black rounded-full hover:bg-gray-100"
                >
                    Read more reviews
                </button>
            </div>
            <Recommendations key={"recs_for_" + bookinfo.id} bookinfo={bookinfo} />
        </div>
    )
}

export default ProductPage
