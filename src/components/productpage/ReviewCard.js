import React from 'react'
import Stars from '../Stars'
import { Icon } from '@iconify/react';

function ReviewCard(props) {
    const { _id, comment, rating, updatedAt } = props.review // user_id book_id can be taken too
    const { ownReview, setCurUserHasLeftReview, setCurUsersReview } = props

    const formatDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        return dateObj.toLocaleDateString('en-GB', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        });
    };

    const username = props.review.user.firstName + " " + props.review.user.lastName
    const date = formatDate(updatedAt)

    const [isExpanded, setIsExpanded] = React.useState(false);
    const maxLength = 220; // max length before showing "Read more"

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const renderComment = () => {
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
                    setCurUserHasLeftReview(false)
                    setCurUsersReview(null)
                }

            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className={`${ownReview ? "bg-primary" : "bg-white"} min-h-[11rem] p-[1rem] rounded-[24px] mb-6 mx-4`}>
            <div className="flex flex-row items-top">
                <div className="flex flex-col m-0 p-0">
                    <span className="font-title text-[1.5rem]">{username}</span>
                    <Stars rating={rating} height="24px" background="white" color={ownReview && "grey-dark"}></Stars>
                </div>
                <div className="ml-auto text-right">
                    <span className="text-grey-dark font-title text-[1rem]">{date}</span>
                    {ownReview && <Icon onClick={handleDeleteClick} icon="mdi:trashcan-outline" width="1.5rem" className="hover:text-warning ml-auto" />}
                </div>
            </div>
            <div>{renderComment()}</div>
        </div>
    );
}

export default ReviewCard
