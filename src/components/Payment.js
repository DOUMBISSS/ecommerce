import React from 'react';
import axios from 'axios';

const Payment = ({ cart, totalAmount }) => {
   

  const handlePayment = async () => {
    // Example request to your backend to handle payment and order validation
    try {
      const response = await axios.post('http://localhost:5000/api/payment', {
        cart,
        totalAmount
      });

      if (response.data.success) {
        alert('Payment successful and order validated');
        // Redirect to a confirmation page or reset cart
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Payment error', error);
      alert('Payment error');
    }
    // console.log(response)
  };


  return (
    <div>
      <button className='btn__payment' onClick={handlePayment}>Procéder au paiement</button>
    </div>
  );
};

export default Payment;