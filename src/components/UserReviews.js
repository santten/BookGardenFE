// components/UserReviews.js
import React, { useState } from 'react';
import deletebtn from '../svg_icons/delete-btn.svg';

const UserReviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            title: 'Book title 1',
            author: 'Book author 1',
            date: 'October 17, 2023',
            score: 5,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
        {
            id: 2,
            title: 'Book title 2',
            author: 'Book author 2',
            date: 'October 11, 2023',
            score: 3,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
        {
            id: 3,
            title: 'Book title 3',
            author: 'Book author 3',
            date: 'August 24, 2023',
            score: 4,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
        {
            id: 4,
            title: 'Book title 4',
            author: 'Book author 4',
            date: 'August 12, 2023',
            score: 2,
            review: 'Lorem ipsum dolor sit amet consectetur...',
        },
    ]);

    const deleteReview = (id) => {
        setReviews(reviews.filter(review => review.id !== id)); 
    };

    const renderStars = (score) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                stars.push(<span key={i} className="text-yellow-500">★</span>); // 实心星
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>); // 空心星
            }
        }
        return stars;
    };

    return (
        <div className="container mx-auto p-6 bg-white">
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
                            <td className="py-3 px-4">{renderStars(review.score)}</td>
                            <td className="py-3 px-4">
                                {review.review} <span className="text-gray-600 cursor-pointer">Read more</span>
                            </td>
                            <td className="py-3 px-4">
                                <button 
                                    onClick={() => deleteReview(review.id)} 
                                    className="text-red-500 hover:text-red-700 transition duration-300"
                                >
                                <img src={deletebtn} alt="deletebtn Icon" className="w-5 h-5" />
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


// import React, { useState } from 'react';

// const UserReviews = () => {
//     const [reviews, setReviews] = useState([
//         {
//             id: 1,
//             title: 'Book title',
//             author: 'Book author',
//             date: 'October 17, 2023',
//             score: 5, // 使用数字类型而不是字符串类型
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//         {
//             id: 2,
//             title: 'Book title',
//             author: 'Book author',
//             date: 'October 11, 2023',
//             score: 3,
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//         {
//             id: 3,
//             title: 'Book title',
//             author: 'Book author',
//             date: 'August 24, 2023',
//             score: 4,
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//         {
//             id: 4,
//             title: 'Book title',
//             author: 'Book author',
//             date: 'August 24, 2023',
//             score: 1,
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//     ]);

//     const deleteReview = (id) => {
//         setReviews(reviews.filter(review => review.id !== id)); 
//     };

//     const renderStars = (score) => {
//         const stars = [];
//         for (let i = 0; i < 5; i++) {
//             if (i < score) {
//                 stars.push('★'); // 添加实心星星
//             } else {
//                 stars.push('☆'); // 添加空心星星
//             }
//         }
//         return stars.join(' ');
//     };

//     return (
//         <div className="review-container">
//           <h2>Review History</h2>
    
//           <table className="review-table">
//             <thead>
//               <tr>
//                 <th>Book</th>
//                 <th>Date</th>
//                 <th>Score</th>
//                 <th>Review</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review.id}>
//                   <td>
//                     <p>{review.title}</p>
//                     <p>by {review.author}</p>
//                   </td>
//                   <td>{review.date}</td>
//                   <td>{renderStars(review.score)}</td> {/* 使用星星显示评分 */}
//                   <td>{review.review}</td>
//                   <td>
//                     <button onClick={() => deleteReview(review.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//     );
// };

// export default UserReviews;




// import React, { useState } from 'react';

// const UserReviews = () => {
//     const [reviews, setReviews] = useState([
//         {
//             id: 1,
//             title: 'Book title 1',
//             author: 'Book author 1',
//             date: 'October 17, 2023',
//             score: '5',
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//         {
//             id: 2,
//             title: 'Book title 2',
//             author: 'Book author 2',
//             date: 'October 11, 2023',
//             score: '3',
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//         {
//             id: 3,
//             title: 'Book title 3',
//             author: 'Book author 3',
//             date: 'August 24, 2023',
//             score: '4',
//             review: 'Lorem ipsum dolor sit amet consectetur...',
//         },
//     ]);

//     const deleteReview = (id) => {
//         setReviews(reviews.filter(review => review.id !== id)); 
//     };

//     return (
//         <div className="review-container">
//           <h2>User Reviews</h2>
    
//           {/* 评价列表 */}
//           <table className="review-table">
//             <thead>
//               <tr>
//                 <th>
//                     <p>Book Title</p>
//                     <p>Author</p>
//                 </th>
//                 <th>Date</th>
//                 <th>Score</th>
//                 <th>Review</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review.id}>
//                   <td>
//                     <p>{review.title}</p>
//                     <p>by {review.author}</p>
//                   </td>
//                   <td>{review.date}</td>
//                   <td>{review.score}</td>
//                   <td>{review.review}</td>
//                   <td>
//                     <button onClick={() => deleteReview(review.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//     );
// };

// export default UserReviews;
