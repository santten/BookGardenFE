import { useState } from 'react'
import ReviewContext from './ReviewContext'

const ReviewContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [reviews, setReviews] = useState([])
    const [makingReview, setMakingReview] = useState(null)
    const [userHasLeftReview, setUserHasLeftReview] = useState(false)

    const [bookID, setBookID] = useState(null)
    const [bookAvgRating, setBookAvgRating] = useState(null)

    return (
        <ReviewContext.Provider value={{
            userData, setUserData,
            reviews, setReviews,
            makingReview, setMakingReview,
            userHasLeftReview, setUserHasLeftReview,
            bookID, setBookID,
            bookAvgRating, setBookAvgRating
        }}>
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewContextProvider