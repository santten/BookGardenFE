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
            <BookInfoCard key={`bookinfo_for_${bookinfo.id}`} bookinfo={bookinfo} />
            <ReviewArea key={`reviews_for_${bookinfo.id}`} bookinfo={bookinfo} />
            

                        {/* Container for Recommendations with gradient */}
                        <div className="relative overflow-hidden">
                        <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 1) 80%)' , pointerEvents: 'none'
                }}></div>
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-white" style={{ pointerEvents: 'none' }}></div> */}
                {/* Recommendations component */}
                <Recommendations key={`recs_for_${bookinfo.id}`} bookinfo={bookinfo} />
            </div>
        </div>

    );
}
//     return (
//         <div className="m-auto max-w-[70vw] min-h-[90vh] pb-[4rem]">
//             <PathLink />
//             <BookInfoCard key={"bookinfo_for_" + bookinfo.id} bookinfo={bookinfo}/>
//             <ReviewArea key={"reviews_for_" + bookinfo.id} bookinfo={bookinfo}/>
//             <Recommendations key={"recs_for_" + bookinfo.id} bookinfo={bookinfo}/>
//         </div>
//     )
// }
// 
            // {/* Container for Recommendations with gradient
            //     {/* Gradient container */}
            //     <div className="relative overflow-hidden">

            //     <div className="absolute   inset-0" style={{
            //         background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 1) 95%)'
            //     }}></div>
            //     {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-white pointer-events-none"></div> */}
            //     {/* Recommendations component */}
            //     <Recommendations key={`recs_for_${bookinfo.id}`} bookinfo={bookinfo} />
            // </div>
            //   </div> */}

export default ProductPage
