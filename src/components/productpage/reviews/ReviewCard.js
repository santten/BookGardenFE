import React from 'react'
import Stars from '../../Stars';
import { Icon } from '@iconify/react';
import ReviewContext from '../../../context/ReviewContext';
import { useContext, useState } from 'react';

function ReviewCard(props) {
    const [isExpanded, setIsExpanded] = useState(false)
    const { _id, comment, rating, updatedAt } = props.review
    const { ownReview } = props
    const { setUserHasLeftReview, userHasLeftReview } = useContext(ReviewContext)

    const handleDeleteClick = async () => {
        if (window.confirm("Are you sure you want to delete your review for this book? This can not be undone.")) {
            const token = JSON.parse(localStorage.getItem("token"))

            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reviews/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to delete the review');
                } else {
                    setUserHasLeftReview(false)
                }

            } catch (error) {
                console.error(error)
            }
        }
    }

    const formatDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        return dateObj.toLocaleDateString('en-GB', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        });
    };

    const renderComment = () => {
        const maxLength = 220
        if (comment.length <= maxLength) {
            return comment;
        }
        if (isExpanded) {
            return (
                <>{comment} <span className="text-primary-dark hover:text-primary cursor-pointer" onClick={toggleReadMore}>Read less</span></>
            );
        }
        return (
            <>{comment.substring(0, maxLength)}... <span className="text-primary-dark hover:text-primary cursor-pointer" onClick={toggleReadMore}>Read more</span></>
        );
    };

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const username = `${props.review.user.firstName} ${props.review.user.lastName}`

    return (
        <div className={`${ownReview && !userHasLeftReview && "hidden"} ${ownReview ? "bg-primary" : "bg-white"} shadow-sm hover:shadow-md min-h-[11rem] p-[1rem] rounded-[1.5rem] mb-6 mx-4`}>
            <div className="flex flex-row items-top">
                <div className="flex flex-col m-0 p-0">
                    <span className="font-title text-[1.5rem]">{username}</span>
                    <Stars rating={rating} height="24px" background="white" color={ownReview && "grey-dark"}></Stars>
                </div>
                <div className="ml-auto text-right">
                    <span className="text-grey-dark font-title text-[1rem]">{formatDate(updatedAt)}</span>
                    {ownReview && <Icon onClick={handleDeleteClick} icon="mdi:trashcan-outline" width="1.5rem" className="hover:text-warning ml-auto" />}
                </div>
            </div>
            <div>{renderComment()}</div>
        </div>
    )
}

export default ReviewCard
