import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import PathLink from '../components/PathLink';
import BookInfoCard from '../components/productpage/BookInfoCard';
import Recommendations from '../components/productpage/Recommendations';
import Reviews from '../components/productpage/reviews/Reviews';
import ReviewContextProvider from '../context/ReviewContextProvider';

import useLoadingComponent from '../hooks/useLoadingComponent';

function ProductPage() {
    const { productID } = useParams();
    const before_loading = "loading"
    const apiurl = process.env.REACT_APP_API_URL
    const [bookinfo, setBookinfo] = useState(before_loading)
    const isBooksLoading = bookinfo === before_loading;

    useEffect(() => {
        fetch((apiurl + `/api/books/${productID}`), {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setBookinfo(data);
            })
            .catch((error) => console.log(error));
    }, [apiurl, productID]);

    return (
        <div className="m-auto min-h-[90vh] pb-[4rem]">
            <PathLink />

            {useLoadingComponent(isBooksLoading, "Loading book information...",
                BookInfoCard, { key: "bookinfo_for_" + bookinfo._id, bookinfo })}

            <ReviewContextProvider>
                {useLoadingComponent(isBooksLoading, "Loading book information...",
                    Reviews, { key: "reviews_for_" + bookinfo._id, bookinfo })}
            </ReviewContextProvider>

            {useLoadingComponent(isBooksLoading, "Loading recommendations...",
                Recommendations, { key: "recs_for_" + bookinfo._id, bookinfo })}
        </div>
    )
}

export default ProductPage
