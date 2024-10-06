import React from 'react'
import { useContext, useState, useEffect } from 'react'
import AuthContext from '../../../context/AuthContext'
import ReviewContext from '../../../context/ReviewContext'
import { Icon } from '@iconify/react'

const ReviewMaking = () => {
    const {
        reviews, userData, setMakingReview, makingReview,
        bookID, userHasLeftReview, setUserHasLeftReview } = useContext(ReviewContext)

    const { isAuthenticated } = useContext(AuthContext)
    const userId = JSON.parse(localStorage.getItem("userId"))

    const [newRating, setNewRating] = useState('');
    const [reviewtext, setReviewtext] = useState('');

    let userReview = reviews.message ? undefined : reviews.find(element => element.user._id === userId)

    useEffect(() => {
        const updateEditingField = () => {

            if (userReview !== undefined) {
                setNewRating(userReview.rating)
                setReviewtext(userReview.comment)
            } else {
                setNewRating(1)
                setReviewtext('')
            }
        }
        updateEditingField()
    }, [userHasLeftReview, reviews, userReview])


    const [hoveredStar, setHoveredStar] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));
        const apiurl = process.env.REACT_APP_API_URL
        const newReview = {
            "user": userId,
            "book": bookID,
            "comment": reviewtext,
            "rating": newRating.toString(),
        }

        const setmethod = userHasLeftReview ? "PATCH" : "POST"
        const seturladditions = userHasLeftReview ? `/api/reviews/${userReview._id}` : "/api/reviews"

        try {
            const response = await fetch(apiurl + seturladditions, {
                method: setmethod,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newReview)
            })

            if (response.ok) {
                await response.json()
                setUserHasLeftReview(true)
                setMakingReview(false)
            } else {
                console.log("Error while handling form submit")
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <>
            {isAuthenticated && makingReview && <div className="mx-4 shadow-sm hover:shadow-md rounded-[1rem] bg-secondary-light p-[1rem]">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center gap-[0.5rem]">
                        <label htmlFor="rating" className="hidden md:block text-[1.5rem] text-gray font-title">Your Rating</label>
                        <div className="pb-[0.2rem]">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Icon
                                    key={"star-" + star}
                                    icon="material-symbols:star"
                                    width="1.5rem"
                                    className={newRating >= star || hoveredStar >= star ? "inline text-grey-dark" : "inline text-grey-light"}
                                    onClick={() => setNewRating(star)}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                />
                            ))}
                        </div>
                    </div>

                    <Icon icon="ic:outline-close" width="1.75rem" className="hover:text-primary-dark text-black ml-auto" onClick={() => setMakingReview(false)} />
                </div>

                <div>
                    <label htmlFor="reviewtext" className="hidden">Review</label>
                    <textarea
                        id="reviewtext"
                        name="reviewtext"
                        value={reviewtext}
                        onChange={(e) => setReviewtext(e.target.value)}
                        className="mt-[0.5rem] block w-full p-[0.5rem] border border-gray-300 rounded-[4px]"
                        rows="4"
                        required
                    />
                </div>
                <div className="flex flex-row items-top my-[0.75rem]">
                    <p className="text-grey-dark text-sm">
                        (Leaving a review as {userData.firstName + " " + userData.lastName})
                    </p>
                    <button onClick={handleSubmit} className="ml-auto flex flex-row gap-[0.5rem] items-center bg-grey-dark hover:bg-black text-white font-semibold py-[0.5rem] px-[1rem] rounded-[99px]">
                        Send <Icon icon="fluent:send-24-filled" className="inline" />
                    </button>
                </div>
            </div>}
        </>
    )
}

export default ReviewMaking
