import ReviewCard from './ReviewCard'
import { useState, useEffect, useContext } from 'react'
import ReviewContext from '../../../context/ReviewContext'

const ReviewRender = () => {
    const { reviews, userData, userHasLeftReview,
        setUserHasLeftReview } = useContext(ReviewContext)
    const [readMoreReviews, setReadMoreReviews] = useState(false);

    const userId = JSON.parse(localStorage.getItem("userId"))
    const [otherReviews, setOtherReviews] = useState([]);
    const [userReview, setUserReview] = useState(undefined);

    useEffect(() => {
        if (reviews.message) { console.log("No reviews") } else {
            const userReview = reviews.find(element => element.user._id === userId);
            const otherRevs = reviews.filter(element => element.user._id !== userId);
            userReview ? setUserHasLeftReview(true) : setUserHasLeftReview(false)
            setUserReview(userReview);
            setOtherReviews(otherRevs);
        }
    }, [reviews]); // reviews, userId, userHasLeftReview

    const handleReadMoreReviews = () => {
        setReadMoreReviews(!readMoreReviews);
    }

    if (reviews.length < 1) {
        return <>(No reviews yet)</>
    } else {
        return (
            <>
                {reviews.message &&
                    <div>(This book has no reviews yet.)</div>}
                <div className="mx-auto flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[0.5rem] my-[1rem]">
                    {userReview !== undefined && (
                        <div className="block">
                            <ReviewCard review={userReview} key={"userreview"} ownReview={true} />
                        </div>
                    )}
                    {otherReviews.map((item, index) => (
                        <div key={"review" + index} className={(!userHasLeftReview && index > 3) || (userHasLeftReview && index > 2) ? `${readMoreReviews ? 'block' : 'hidden'}` : 'block'}>
                            <ReviewCard review={item} key={"review" + index} ownReview={false} />
                        </div>
                    ))}
                </div>
                {reviews.length > 4 &&
                    <div className="text-center mt-0 bg-grey-light">
                        <button
                            onClick={handleReadMoreReviews}
                            className="px-6 py-2 mb-6 text-black border border-2 border-black rounded-full hover:border-primary-dark hover:text-primary-dark"
                        >
                            {readMoreReviews ? "See less reviews" : "Read more reviews"}
                        </button>
                    </div>
                }
            </>
        );
    }
}

export default ReviewRender
