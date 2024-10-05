import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DeliveryForm from '../components/payment/DeliveryForm';
import PaymentForm from '../components/payment/PaymentForm'; // Import the PaymentForm component
import { toast } from 'react-toastify';
import './checkOutPage.css'; // CSS for styling the page

function CheckOutPage() {
  const location = useLocation();
  const { totalPrice, totalItems } = location.state || {}; // Retrieve totalPrice and totalItems from state
 
  const [proceedToPayment, setProceedToPayment] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const apiurl = process.env.REACT_APP_API_URL;
  const token = JSON.parse(localStorage.getItem('token'));
  const userId = JSON.parse(localStorage.getItem('userId'));  

  if (!token || !userId) {
    toast.error('User is not authenticated.');
    return;
  }

  // Post Order 
  const handlePayment = async (paymentDetails) => {
    try {

      const orderResponse = await fetch(`${apiurl}/api/orders`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userId,   
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create order');
      }

      const orderData = await orderResponse.json();
      console.log('Order created:', orderData);

      console.log('Cart cleared');
      toast.success('Payment successful and order placed!');

      // 在支付成功后，您可以跳转到订单历史页面
    } catch (error) {
      console.error('Error during payment and order creation:', error);
      toast.error('Payment failed or unable to create order.');
    }
  }



  // Handle proceed to payment
  const handleProceedToPayment = (formData) => {
    setDeliveryInfo(formData);
    setProceedToPayment(true);
  };

  return (
    <div className="checkout-page">
      {!proceedToPayment ? (
        <>
          <h2>Your Shopping Cart</h2>
          <div className="cart-summary">
            <div className="summary-details">
              <p>Total Items: <strong>{totalItems}</strong></p>
              <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
            </div>
            <div>
              <DeliveryForm onSubmit={handleProceedToPayment} />
            </div>
          </div>
        </>
      ) : (
        <PaymentForm onSubmit={(paymentDetails) => handlePayment(paymentDetails, deliveryInfo)} />
        // <PaymentForm onSubmit={handlePayment} /> //{(paymentDetails) => console.log('Payment submitted', paymentDetails)}
      )}
    </div>
  );
}

export default CheckOutPage;