import React from 'react'
import RenderReviews from './RenderReviews'
import Stars from '../Stars'
import { Icon } from '@iconify/react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function ReviewArea(props) {
  const { isAuthenticated } = useContext(AuthContext)
  const userId = JSON.parse(localStorage.getItem('userId'));
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const { curUserHasLeftReview, setCurUserHasLeftReview } = props

  const fetchUserDetails = async () => {
    try {
      let token = JSON.parse(localStorage.getItem('token'));

      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await fetch(`http://localhost:4000/api/users/${userId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setLastName(data.lastName)
        setFirstName(data.firstName)
        setReviewmakingtoggle(true)
      } else {
        console.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const navigate = useNavigate()

  const apiurl = process.env.REACT_APP_API_URL;
  const reviews = props.reviewlist
  const bookID = props.bookID

  // initializing variable for overall book rating
  const rating = undefined

  // true: show review making area, hide add review button
  // false: show add reviewbutton, hide review making area
  const { reviewmakingtoggle, setReviewmakingtoggle } = props

  let curUsersReview = reviews.find(element => element.user._id === userId) || {"rating": 3, "comment": ''}
  const [newRating, setNewRating] = useState(curUsersReview.rating);
  const [reviewtext, setReviewtext] = useState(curUsersReview.comment);

  // for star renders
  const [hoveredStar, setHoveredStar] = useState(0);

  // put form submission logic here when possible
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('token'));

    const newReview = {
      "user": userId,
      "book": bookID,
      "comment": reviewtext,
      "rating": newRating.toString(),
    }

    const setmethod = curUserHasLeftReview ? "PATCH" : "POST"
    const seturladditions = curUserHasLeftReview ? `/api/reviews/${curUsersReview._id}` : "/api/reviews"

    try {
      const response = await fetch(apiurl + seturladditions, {
        method: setmethod,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newReview)
      })

      if (!response.ok) {
        console.log("Error while handling form submit")
      } else {
        const responseData = await response.json();
        console.log(responseData)
        curUsersReview = responseData
        setCurUserHasLeftReview(true)
        setReviewmakingtoggle(false)
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handleReviewMakingToggle = () => {
    fetchUserDetails()
  }

  return (
    <div className="bg-grey-light pb-[2rem]">
      <div className="containerBig">
        <div className="flex flex-row w-[100%]">
          <h2 className="mt-[1rem] w-[100%] flex flex-row items-center">
            <span className="text-[2rem] font-title">Reviews</span>
            <span className="pl-[0.5rem] text-[1.25rem] text-grey-dark">
              {reviews.length >= 1 && rating !== undefined &&
                <div className="flex items-center gap-[0.5rem]"><Stars rating={rating} height="1.75rem" background="light" />({rating.toFixed(2)})</div>}
            </span>
            {!reviewmakingtoggle && isAuthenticated &&
              <button onClick={handleReviewMakingToggle} className="ml-auto flex items-center flex-row gap-[0.5rem] l-auto bg-black hover:bg-primary-dark text-white font-semibold p-[0.5rem] rounded-[99px] px-[1rem] py-[0.5rem]">
                <span>{curUserHasLeftReview ? "Edit Your Review" : "Add A Review"} </span>
                <Icon icon="jam:write-f" className="inline" />
              </button>}
            {!reviewmakingtoggle && !isAuthenticated &&
              <button onClick={() => navigate("../login")} className="ml-auto flex items-center flex-row gap-[0.5rem] l-auto bg-black hover:bg-primary-dark text-white font-semibold p-[0.5rem] rounded-[99px] px-[1rem] py-[0.5rem]">
                <span>Login to Add Your Review </span>
                <Icon icon="jam:write-f" className="inline" />
              </button>}
          </h2>
        </div>
        {reviewmakingtoggle && isAuthenticated && (
          <div className="rounded-[12px] bg-primary p-[1rem]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row w-[100%]">
                <div className="flex flex-row">
                  <label htmlFor="rating" className="block text-[1.5rem] pr-[0.5rem] text-gray font-title">Rating</label>
                  <div>
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

                <Icon icon="ic:outline-close" width="1.75rem" className="hover:text-primary-dark text-black ml-auto" onClick={() => setReviewmakingtoggle(false)} />
              </div>
              <p>(Leaving a review as {firstName + " " + lastName})</p>
              <div className="mb-[1rem]">
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
              <button type="submit" className="ml-auto flex flex-row gap-[0.5rem] items-center bg-grey-dark hover:bg-black text-white font-semibold py-[0.5rem] px-[1rem] rounded-[99px]">
                Submit <Icon icon="fluent:send-24-filled" className="inline" />
              </button>
            </form>
          </div>
        )}

        {reviews.message ? <p>{reviews.message}</p> :
          <div className="flex flex-col">
            <RenderReviews
              reviewmakingtoggle={reviewmakingtoggle}
              setReviewmakingtoggle={setReviewmakingtoggle}
              reviews={reviews}
              userId={userId}
              curUserHasLeftReview={curUserHasLeftReview}
              setCurUserHasLeftReview={setCurUserHasLeftReview} />
          </div>
        }
      </div>
    </div >
  )
}

export default ReviewArea
