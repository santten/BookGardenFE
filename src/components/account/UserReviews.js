// components/UserReviews.js
import React, { useEffect, useState } from 'react';

import ReviewRow from './ReviewRow';
import { Link } from 'react-router-dom';

const UserReviews = () => {
    const [userReviews, setUserReviews] = useState([])
    const [reloadReviews, setReloadReviews] = useState(false)

    // GET reviews fetch
    useEffect(() => {
        const fetchUsersReviews = async () => {
            const apiurl = process.env.REACT_APP_API_URL
            const userId = JSON.parse(localStorage.getItem("userId"))
            const token = JSON.parse(localStorage.getItem("token"))

            const response = await fetch(`${apiurl}/api/reviews/user/${userId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json()
            setUserReviews(data)
        }
        fetchUsersReviews()
    }, [reloadReviews])

    return (<div className="container mx-auto mb-[2rem] p-2 mt-10">
        <h2 className="text-3xl font-title text-left">Review history</h2>
        {userReviews.length >= 1 ?
            <table className="my-[1rem] w-[95%]">
                <thead className="text-grey-dark text-semibold text-md border-b border-b-grey-dark border-b-[2px]">
                    <tr>
                        <th className="py-2 pl-4 pr-2 text-left">Book</th>
                        <th className="py-2 px-2 text-left">Date</th>
                        <th className="py-2 px-2 text-left">Rating</th>
                        <th className="py-2 px-2 text-left">Review</th>
                        <th className="py-2 pl-2 pr-4 text-center">Delete</th>
                    </tr>
                </thead>
                {userReviews.map((item, index) =>
                    <ReviewRow reloadReviews={reloadReviews} setReloadReviews={setReloadReviews} item={item} index={index} />
                )}</table> :
            <p>No reviews yet...<br />
                <Link className="text-primary-dark underline hover:text-grey-dark" to="/browse/all/page/1">Find your next favorite book</Link> and start writing!</p>}
    </div>)
};

export default UserReviews;