import React from 'react'
import { useContext, useEffect } from 'react'
import ReviewContext from '../../../context/ReviewContext'
import AuthContext from '../../../context/AuthContext'
import ReviewHeading from './ReviewHeading'
import ReviewMaking from './ReviewMaking'
import ReviewRender from './ReviewRender'

const Reviews = (props) => {
    const {
        userHasLeftReview, userData, setUserData, setReviews, makingReview,
        bookID, setBookID, setBookAvgRating } = useContext(ReviewContext)

    const { isAuthenticated } = useContext(AuthContext)
    
    const userId = JSON.parse(localStorage.getItem('userId'));
    const token = JSON.parse(localStorage.getItem('token'));
    const apiurl = process.env.REACT_APP_API_URL
    setBookID(props.bookinfo._id)
    setBookAvgRating(props.bookinfo.rating)

    // fetchUserDetails on mount
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                if (!token) {
                    console.error('No token found');
                    return;
                }

                const response = await fetch(`${apiurl}/api/users/${userId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data)
                } else {
                    console.error('Failed to fetch user details');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        }

        if (isAuthenticated) { fetchUserDetails() }
    }, [])

    // fetch reviews when reviewmaking popup state is changed
    useEffect(() => {
        const fetchReviews = async () => {
            fetch((`${apiurl}/api/books/${props.bookinfo._id}/reviews`), {
                method: "GET"
            })
                .then((response) => response.json())
                .then((data) => {
                    setReviews(data);
                })
                .catch((error) => console.error(error));
        }
        fetchReviews()
    }, [makingReview, userHasLeftReview])

    return (
        <div className="bg-grey-light pb-[2rem]">
            <div className="containerBig">
                <ReviewHeading />
                <ReviewMaking setBookinfo={props.setBookinfo} />
                <ReviewRender setBookinfo={props.setBookinfo} />
            </div>
        </div>
    )
}

export default Reviews
