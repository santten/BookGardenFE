import React from 'react'
import Stars from '../Stars'

function ReviewCard(props) {
    const { comment, rating } = props.review // user_id book_id can be taken too

    const username = "Matti Lewinston" // will be taken from db according to user_id later
    const date = "12.12.2012" // will be taken from db timestamp later probably
    
    const [isExpanded, setIsExpanded] = React.useState(false);
    const maxLength = 190; // max length before showing "Read more"

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

    return (
        <div className="min-h-[11rem] p-[1rem] bg-white rounded-[24px] mb-6 mx-4">
            <div className="flex flex-row items-top">
                <p className="flex flex-col m-0 p-0">
                    <span className="font-title text-[1.5rem]">{username}</span>
                    <Stars rating={rating} height="24px"></Stars>
                </p>
                <span className="text-grey-dark ml-auto font-title text-[1rem]">{date}</span>
            </div>
            <div>{renderComment()}</div>
        </div>
    );
}

export default ReviewCard
