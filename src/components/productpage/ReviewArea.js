import React from 'react'
import ReviewCard from './ReviewCard'
import Stars from '../Stars'
import { Icon } from '@iconify/react'
import { useState } from 'react'

function ReviewArea(props) {
  const apiurl = process.env.REACT_APP_API_URL;
  const reviews = props.reviewlist
  
  // placeholder
  const rating = undefined

  // true: show review making area, hide add review button
  // false: show add reviewbutton, hide review making area
  const [reviewmakingtoggle, setReviewmakingtoggle] = useState(false)

  // for making a new review
  const [newRating, setNewRating] = useState(3);
  const [reviewtext, setReviewtext] = useState('');
  const [readMoreReviews, setReadMoreReviews] = useState(false);

  // for star renders
  const [hoveredStar, setHoveredStar] = useState(0);

  // put form submission logic here when possible
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Rating: ${newRating} Reviewtext: ${reviewtext}`);
  };

  const handleReadMoreReviews = () => {
    setReadMoreReviews(!readMoreReviews);
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
            {reviewmakingtoggle ? <></> :
              <button onClick={() => setReviewmakingtoggle(true)} className="ml-auto flex items-center flex-row gap-[0.5rem] l-auto bg-black hover:bg-primary-dark text-white font-semibold p-[0.5rem] rounded-[99px] px-[1rem] py-[0.5rem]">
                <span>Add A Review </span>
                <Icon icon="jam:write-f" className="inline" />
              </button>
            }
          </h2>
        </div>

        {reviewmakingtoggle ? (
          <div className="rounded-[12px] bg-primary p-[1rem]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row w-[100%]">
                <div className="flex flex-row">
                  <label htmlFor="rating" className="block text-[1.5rem] pr-[0.5rem] text-gray font-title">Rating</label>

                  <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
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
        ) : <></>}

        {reviews.message ? <p>{reviews.message}</p> :
          <div className="mx-auto flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[0.5rem] my-[1rem]">
            {reviews.length < 1 ? <>(No reviews yet)</> :
              reviews.map((item, index) =>
                <div className={
                  index > 5 ? `${readMoreReviews ? 'hidden' : 'block'}` : 'block'
                }>
                  <ReviewCard review={item} key={"review" + item.book_id + item.user_id} /></div>
              )}
          </div>}
        {reviews.length > 6 ?
          <div className="text-center mt-0 bg-grey-light">
            <button
              onClick={handleReadMoreReviews}
              className="px-6 py-2 mb-6 text-black border border-2 border-black rounded-full hover:border-primary-dark hover:text-primary-dark"
            >
              {readMoreReviews ? "Read more reviews" : "See less reviews"}
            </button>
          </div>
          : <></>}
      </div>
    </div >
  )
}

export default ReviewArea
