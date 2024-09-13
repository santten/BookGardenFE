import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderButton from '../components/OrderButton';
import PaymentForm from '../components/PaymentForm'; // Import the PaymentForm component
import './checkOutPage.css'; // CSS for styling the page

function CheckOutPage() {
  const location = useLocation();
  const { totalPrice, totalItems } = location.state || {}; // Retrieve totalPrice and totalItems from state

  const [proceedToPayment, setProceedToPayment] = useState(false);

 

  // Handle proceed to payment
  const handleProceedToPayment = () => {
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
          <div onClick={handleProceedToPayment}>
              <OrderButton />
            </div>
          </div>
        </>
      ) : (
        <PaymentForm onSubmit={(paymentDetails) => console.log('Payment submitted', paymentDetails)} />
      )}
    </div>
  );
}

export default CheckOutPage;
