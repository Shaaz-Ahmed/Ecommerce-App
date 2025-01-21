// src/components/PaymentPage.jsx
import React, { useState } from 'react';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
  const [upiId, setUpiId] = useState(''); // UPI ID state

  // Handle changes to the payment method (Credit Card or UPI)
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  // Handle form submission for payment
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'card') {
      // Process card payment here
      alert('Processing Credit Card Payment...');
    } else if (paymentMethod === 'upi') {
      // Process UPI payment here
      alert(`Processing UPI Payment with ID: ${upiId}`);
    }
  };

  return (
    <div className="container my-5 py-5">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        {/* Payment Method Selection */}
        <div className="form-group mb-4">
          <label htmlFor="paymentMethod">Select Payment Method</label>
          <div className="d-flex">
            <div className="form-check me-4">
              <input
                type="radio"
                className="form-check-input"
                id="creditCard"
                name="paymentMethod"
                checked={paymentMethod === 'card'}
                onChange={() => handlePaymentMethodChange('card')}
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="upi"
                name="paymentMethod"
                checked={paymentMethod === 'upi'}
                onChange={() => handlePaymentMethodChange('upi')}
              />
              <label className="form-check-label" htmlFor="upi">
                UPI
              </label>
            </div>
          </div>
        </div>

        {/* Credit Card Form */}
        {paymentMethod === 'card' && (
          <>
            <div className="form-group mb-3">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="Enter card number"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                placeholder="Enter CVV"
                required
              />
            </div>
          </>
        )}

        {/* UPI Form */}
        {paymentMethod === 'upi' && (
          <div className="form-group mb-3">
            <label htmlFor="upiId">Enter UPI ID</label>
            <input
              type="text"
              className="form-control"
              id="upiId"
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn-success mt-3">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
