import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import PathLink from '../components/PathLink';
import BookInfoCard from '../components/productpage/BookInfoCard';
import Recommendations from '../components/productpage/Recommendations';
import ReviewArea from '../components/productpage/ReviewArea';

import useLoadingComponent from '../hooks/useLoadingComponent';

function ProductPage() {
    const { productID } = useParams();
    const before_loading = "loading"
    const apiurl = process.env.REACT_APP_API_URL
    const [bookinfo, setBookinfo] = useState(before_loading)
    const [reviews, setReviews] = useState(before_loading)
    const [reviewmakingtoggle, setReviewmakingtoggle] = useState(false)

    const [curUserHasLeftReview, setCurUserHasLeftReview] = useState(false)

    const isBooksLoading = bookinfo === before_loading;
    const isReviewsLoading = reviews === before_loading

    const [editingReview, setEditingReview] = useState(false)

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

    useEffect(() => {
        fetch((apiurl + `/api/books/${productID}/reviews`), {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((error) => console.log(error));
    }, [apiurl, productID, reviewmakingtoggle, curUserHasLeftReview, reviews]);

    return (
        <div className="m-auto min-h-[90vh] pb-[4rem]">
            <PathLink />

            {useLoadingComponent(isBooksLoading, "Loading book information...",
                BookInfoCard, { key: "bookinfo_for_" + bookinfo._id, bookinfo })}
            {useLoadingComponent(isReviewsLoading, "Loading reviews...",
                ReviewArea, {
                className: "bg-accent", key: "reviews_for_" + bookinfo._id,
                reviewlist: reviews,
                bookID: bookinfo._id,
                reviewmakingtoggle: reviewmakingtoggle,
                setReviewmakingtoggle: setReviewmakingtoggle,
                curUserHasLeftReview: curUserHasLeftReview,
                setCurUserHasLeftReview: setCurUserHasLeftReview
            })}
            {useLoadingComponent(isBooksLoading, "Loading recommendations...",
                Recommendations, { key: "recs_for_" + bookinfo._id, bookinfo })}
        </div>
    )
}

export default ProductPage
