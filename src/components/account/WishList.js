// components/WishList.js
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]); // Renamed for clarity
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token'); // Assuming token is a string
    const userId = JSON.parse(localStorage.getItem('userId'));

    useEffect(() => {
        const fetchWishlist = async () => {
            if (!token || !userId) {
                toast.error('Please login to view your wishlist.');
                return;
            }

            const fetchUrl = `${apiUrl}/api/wishlist/${userId}`;
            console.log('Fetching Wishlist from:', fetchUrl); // Debugging log

            try {
                const response = await fetch(fetchUrl, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch wishlist.');
                }

                const data = await response.json();
                setWishlist(data);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
                toast.error(error.message || 'Failed to load wishlist.');
            }
        };

        fetchWishlist();
    }, [apiUrl, token, userId]);

    if (!token || !userId) {
        return <div>Please login to view your wishlist.</div>;
    }

    return (
        <div className="container mx-auto p-2 mt-10 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6 text-left">Wishlist</h2>

            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <table className="overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                    <thead className="text-gray-500 text-lg border-b">
                        <tr>
                            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Title</th>
                            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Author</th>
                            <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="py-3 px-4 text-lg">{item.title}</td>
                                <td className="py-3 px-4">{item.author}</td>
                                <td className="py-3 px-4">
                                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default WishList;
