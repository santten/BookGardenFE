import React, { useState } from 'react';
import './PaymentForm.css';

function PaymentForm({ onSubmit }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentDetails = {
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
      billingAddress,
      zipCode,
    };
    onSubmit(paymentDetails);
  };

  return (
    <div className="payment-form">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number</label>
          <input 
            type="text" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            placeholder="1234 5678 9012 3456" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input 
            type="text" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
            placeholder="MM/YY" 
            required 
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input 
            type="text" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            placeholder="123" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Name on Card</label>
          <input 
            type="text" 
            value={nameOnCard} 
            onChange={(e) => setNameOnCard(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Billing Address</label>
          <input 
            type="text" 
            value={billingAddress} 
            onChange={(e) => setBillingAddress(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input 
            type="text" 
            value={zipCode} 
            onChange={(e) => setZipCode(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-btn">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;

