// components/OrderHistory.js
import React, { useState } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            orderNumber: '#3456_768',
            date: 'October 17, 2023',
            status: 'Delivered',
            price: '1234.00€',
        },
        {
            id: 2,
            orderNumber: '#3456_980',
            date: 'October 11, 2023',
            status: 'Delivered',
            price: '345.00€',
        },
        {
            id: 3,
            orderNumber: '#3456_120',
            date: 'August 24, 2023',
            status: 'Delivered',
            price: '2345.00€',
        },
        {
            id: 4,
            orderNumber: '#3456_030',
            date: 'August 12, 2023',
            status: 'Delivered',
            price: '845.00€',
        },
    ]);

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
                            <td  className="py-3 px-4 text-lg">{order.orderNumber}</td>
                            <td  className="py-3 px-4">{order.date}</td>
                            <td  className="py-3 px-4">{order.status}</td>
                            <td  className="py-3 px-4">{order.price}</td>
                            {/* <td>
                                <button onClick={() => deleteOrder(order.id)}>Delete</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
