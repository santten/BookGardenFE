import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import DeliveryForm from '../components/payment/DeliveryForm';
import PaymentForm from '../components/payment/PaymentForm'; // Import the PaymentForm component
import { toast } from 'react-toastify';
import './checkOutPage.css'; // CSS for styling the page

function CheckOutPage() {
  const location = useLocation();
  const { totalPrice, totalItems } = location.state || {}; // Retrieve totalPrice and totalItems from state
  const navigate = useNavigate(); // Initialize useNavigate

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
      // Payment success, show a success message
      toast.success('Payment successful and order placed!');
      // Navigate to the order history page after successful payment
      navigate('/account/orders'); 

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
          <h2 className="font-title" >Your Shopping Cart</h2>
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
      )}
    </div>
  );
}

export default CheckOutPage;