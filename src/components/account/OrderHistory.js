// components/OrderHistory.js
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const apiurl = process.env.REACT_APP_API_URL;
    const token = JSON.parse(localStorage.getItem('token'));
    const userId = JSON.parse(localStorage.getItem('userId'));

    useEffect(() => {
        const fetchOrders = async () => {
            if (!token) {
                toast.error('Please login to view your order history.');
                return;
            }

            try {
                const response = await fetch(`${apiurl}/api/orders/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch order history.');
                }

                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching order history:', error);
                toast.error('Failed to load order history.');
            }
        };

        fetchOrders();
    }, [apiurl, token, userId]);


    // const deleteOrder = (id) => {
    //     setOrders(orders.filter(order => order.id !== id));
    // };

    return (
        <div className="container mx-auto p-2 mt-10 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6 text-left">Order History</h2>

            <table className="overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                <thead className="text-gray-500 text-lg border-b">
                    <tr>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Number ID</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Dates</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Status</th>
                        <th className="py-2 px-4 text-left" style={{ fontWeight: 'normal' }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-b">
                            <td className="py-3 px-4 text-lg">{order.number}</td>
                            <td className="py-3 px-4">{new Date(order.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</td>
                            <td className="py-3 px-4">{order.status}</td>
                            <td className="py-3 px-4">{order.price.toFixed(2)} €</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
