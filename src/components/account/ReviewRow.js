import { Icon } from '@iconify/react'
import Stars from '../Stars';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ReviewRow = ({ index, item, reloadReviews, setReloadReviews }) => {
    const [commentReadMore, setCommentReadMore] = useState(false)

    // format date
    const formatDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        return dateObj.toLocaleDateString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };

    // DELETE selected review fetch
    const deleteReview = async (id) => {
        if (window.confirm(`Are you sure you want to delete your review of "${item.book.title}"? This can not be undone.`)) {
            const apiurl = process.env.REACT_APP_API_URL
            const token = JSON.parse(localStorage.getItem("token"))

            const response = await fetch(`${apiurl}/api/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (response.ok) {
                setReloadReviews(!reloadReviews)
            }
        }
    }

    // make sure too-long comments and titles are under a read more
    const renderPossiblyLongText = (content, toggle, setToggle, maxLength) => {

        if (content.length <= maxLength) {
            return content;
        }
        if (toggle) {
            return (
                <>{content} <span className="text-primary-dark hover:text-primary cursor-pointer" onClick={() => setToggle(false)}>Read less</span ></>
            );
        }
        return (
            <>{content.substring(0, maxLength)}... <span className="text-primary-dark hover:text-primary cursor-pointer" onClick={() => setToggle(true)}>Read more</span></>
        );
    };

    return (
        <tr key={`review-${index}`} className="text-grey-dark text-md border-b border-b-grey-dark border-b-[1px]">
            <td className="align-top py-3 pl-4 pr-2 min-w-[14rem]">
                <Link className="hover:text-primary-dark" to={`../products/${item.book._id}`}>
                    <b>{item.book.title}</b> by {item.book.author}
                </Link>
            </td>
            <td className="align-top py-3 px-2 align-top">
                {formatDate(item.updatedAt)}
            </td>
            <td className="px-2 align-top py-3 min-w-[6rem]">
                <Stars height={"1rem"} color="grey" rating={item.rating} />
            </td>
            <td className="px-2 align-top py-3">


                {renderPossiblyLongText(
                    `${item.comment}`,
                    commentReadMore, setCommentReadMore, 72)}
            </td>
            <td className="text-right pl-2 pr-4 align-top py-3">
                <button
                    onClick={() => deleteReview(item._id)}>
                    <Icon icon="mdi:trashcan-outline" width="1.5rem" className="text-black hover:text-warning"></Icon>
                </button>
            </td>
        </tr>
    )
}

export default ReviewRow
