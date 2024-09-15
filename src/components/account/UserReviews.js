// components/UserReviews.js
import React, { useState } from 'react';
import { Icon } from '@iconify/react'
import Stars from '../Stars';

const UserReviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            title: 'Book title 1',
            author: 'Book author 1',
            date: 'October 17, 2023',
            rating: 5,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
        {
            id: 2,
            title: 'Book title 2',
            author: 'Book author 2',
            date: 'October 11, 2023',
            rating: 3,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
        {
            id: 3,
            title: 'Book title 3',
            author: 'Book author 3',
            date: 'August 24, 2023',
            rating: 4,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
        {
            id: 4,
            title: 'Book title 4',
            author: 'Book author 4',
            date: 'August 12, 2023',
            rating: 2,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
    ]);

    const deleteReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id)); 
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-left">Review history</h2>

            <table className="min-w-full overflow-hidden">
                <thead className="text-gray-400 text-[25px]">
                    <tr>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Book</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Date</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Score</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Review</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.id} className="border-b">
                            <td className="py-3 px-4">
                                <p className="font-semibold">{review.title}</p>
                                <p className="text-sm text-gray-600">by {review.author}</p>
                            </td>
                            <td className="py-3 px-4">{review.date}</td>
                            <td className="py-3 px-4"><Stars rating={review} height="12px" background="white"/></td>
                            <td className="py-3 px-4">
                                {review.review} <span className="text-gray-600 cursor-pointer">Read more</span>
                            </td>
                            <td className="py-3 px-4">
                                <button 
                                    onClick={() => deleteReview(review.id)} 
                                >
                                <Icon icon="mdi:trashcan-outline" width="1.25rem" className="text-black hover:text-warning"></Icon>
                                 </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserReviews;