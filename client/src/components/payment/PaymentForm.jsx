// client/src/components/payment/PaymentForm.jsx

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './PaymentForm.css'; // Add your custom styling here

const PaymentForm = ({ amount, currency }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data: { clientSecret } } = await axios.post('/api/payment/create-payment-intent', {
        amount,
        currency,
      });

      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setError(error.message);
        setSuccess(false);
      } else if (paymentIntent.status === 'succeeded') {
        setSuccess(true);
        setError(null);
        // Optional: Handle any post-payment processing here (e.g., update order status)
      }
    } catch (err) {
      setError('Payment failed');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <CardElement className="card-element" />
      <button type="submit" disabled={!stripe || loading}>
        Pay {currency.toUpperCase()} {amount / 100}
      </button>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Payment Successful!</div>}
    </form>
  );
};

export default PaymentForm;
