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


    return (
        <div className="container mx-auto p-2 mt-10 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6 text-left">Order History</h2>

            <table className="my-[1rem] w-[95%]">
                <thead className="text-grey-dark text-semibold text-md border-b border-b-grey-dark border-b-[2px]">
                    <tr>
                        <th className="py-2 pl-4 pr-2 text-left">Number ID</th>
                        <th className="py-2 px-4 text-left">Dates</th>
                        <th className="py-2 px-4 text-left">Status</th>
                        <th className="py-2 pl-2 pr-4 text-left">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="text-grey-dark text-md border-b border-b-grey-dark border-b-[1px]">
                            <td className="align-top py-3 px-4 text-lg">{order.number}</td>
                            <td className="align-top py-3 px-4">{new Date(order.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</td>
                            <td className="align-top py-3 px-4">{order.status}</td>
                            <td className="align-top py-3 px-4">{order.price.toFixed(2)} €</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
