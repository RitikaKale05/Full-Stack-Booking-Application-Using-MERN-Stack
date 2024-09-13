// client/src/components/payment/Payment.jsx

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51Plb8N00juWD5XtQITF69xcaUBDZ0wFSnbBJKE684Zi0NhiMl0yhsSYAyPSe8Z3l2HFzewK8CgzzUhWS5M24wz4I00PIrOSpCY');

const Payment = ({ amount, currency }) => (
  <Elements stripe={stripePromise}>
    <PaymentForm amount={amount} currency={currency} />
  </Elements>
);

export default Payment;
