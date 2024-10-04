import ReviewCard from './ReviewCard'
import { useState, useEffect } from 'react'

const RenderReviews = (props) => {
    const { reviews, userId, curUserHasLeftReview, setCurUserHasLeftReview } = props
    const [readMoreReviews, setReadMoreReviews] = useState(false);

    const [curUsersReview, setCurUsersReview] = useState(null);
    const [otherReviews, setOtherReviews] = useState([]);

    useEffect(() => {
        const curRev = curUserHasLeftReview ? reviews.find(element => element.user._id === userId) : null;
        const otherRevs = reviews.filter(element => element.user._id !== userId);
        setCurUsersReview(curRev);
        setOtherReviews(otherRevs);
    }, [reviews, userId, curUserHasLeftReview]);


    const handleReadMoreReviews = () => {
        setReadMoreReviews(!readMoreReviews);
    }

    if (reviews.length < 1) {
        return <>(No reviews yet)</>
    } else {
        return (
            <>
                <div className="mx-auto flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[0.5rem] my-[1rem]">
                    {curUsersReview && (
                        <div key={"curUserReview"} className="block">
                            <ReviewCard review={curUsersReview} setCurUsersReview={setCurUsersReview}
                                setCurUserHasLeftReview={setCurUserHasLeftReview} key={"userreview"} ownReview={true} />
                        </div>
                    )}
                    {otherReviews.map((item, index) => (
                        <div key={"review" + index} className={(!curUserHasLeftReview && index > 3) || (curUserHasLeftReview && index > 2) ? `${readMoreReviews ? 'block' : 'hidden'}` : 'block'}>
                            <ReviewCard review={item} key={"review" + index} ownReview={false} />
                        </div>
                    ))}
                </div>
                {reviews.length > 4 ?
                    <div className="text-center mt-0 bg-grey-light">
                        <button
                            onClick={handleReadMoreReviews}
                            className="px-6 py-2 mb-6 text-black border border-2 border-black rounded-full hover:border-primary-dark hover:text-primary-dark"
                        >
                            {readMoreReviews ? "See less reviews" : "Read more reviews"}
                        </button>
                    </div>
                    : <></>}
            </>
        );
    }
}

export default RenderReviews
