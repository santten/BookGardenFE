import React, { useState } from 'react';
import './DeliveryForm.css'

function DeliveryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="delivery-form" onSubmit={handleSubmit}>
      <h3>Delivery Information</h3>
      <div>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
      </div>
      <button type="submit">Proceed to Payment</button>
    </form>
  );
}

export default DeliveryForm;
