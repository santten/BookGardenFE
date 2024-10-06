import React from 'react'
import Stars from '../../Stars'
import ReviewContext from '../../../context/ReviewContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext'
import { Icon } from '@iconify/react'

const ReviewHeading = () => {
    const { bookAvgRating, userHasLeftReview, makingReview, setMakingReview } = useContext(ReviewContext)
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div className="mt-[4rem] pt-[1rem] gap-[0.5rem] w-[100%] flex flex-col md:flex-row items-center">
            <div className="flex flex-row items-center">
                <h2 className="text-[2rem] font-title">Reviews</h2>
                <span className="pl-[0.5rem] text-[1.25rem] text-grey-dark">
                    {bookAvgRating > 0 &&
                        <div className="flex flex-row items-center gap-[0.5rem]">
                            <Stars rating={bookAvgRating} height="1.75rem" background="light" />({bookAvgRating.toFixed(2)})
                        </div>}
                </span>
            </div>

            <div className="md:ml-auto">
                {isAuthenticated && !userHasLeftReview && !makingReview &&
                    <button className="ml-auto flex items-center flex-row gap-[0.5rem] l-auto bg-black hover:bg-primary-dark text-white font-semibold p-[0.5rem] rounded-[99px] px-[1rem] py-[0.5rem]"
                        onClick={() => setMakingReview(true)}>
                        <span>Add Your Review</span>
                        <Icon icon="jam:write-f" className="inline" />
                    </button>}

                {isAuthenticated && userHasLeftReview && !makingReview &&
                    <button className="ml-auto flex items-center flex-row gap-[0.5rem] l-auto bg-black hover:bg-primary-dark text-white font-semibold p-[0.5rem] rounded-[99px] px-[1rem] py-[0.5rem]"
                        onClick={() => setMakingReview(true)}>
                        <span>Edit Your Review</span>
                        <Icon icon="jam:write-f" className="inline" />
                    </button>}

                {!isAuthenticated &&
                    <button onClick={() => navigate("../login")} className="ml-auto flex items-center flex-row gap-[0.5rem] l-auto bg-black hover:bg-primary-dark text-white font-semibold p-[0.5rem] rounded-[99px] px-[1rem] py-[0.5rem]">
                        <span>Login to Add Your Review </span>
                        <Icon icon="jam:write-f" className="inline" />
                    </button>}
            </div>
        </div>
    )
}

export default ReviewHeading
