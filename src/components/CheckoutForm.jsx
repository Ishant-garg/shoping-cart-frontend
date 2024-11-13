import React, { useState } from 'react'; // Import useState
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutForm = () => {
  const cartData = useSelector(store => store.cart.item);
  const total = useSelector(store => store.cart.totalCart);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleCheckout = async () => {
    setLoading(true); // Set loading to true when starting checkout

    const items = [
      {
        price_data: {
          currency: 'usd', // Replace with your currency
          product_data: {
            name: 'Product Name', // Replace with actual product name
            description: 'Product Description', // Optional description
          },
          unit_amount: total * 100, // Amount in cents (e.g., $148.24)
        },
        quantity: 1, // Specify the quantity
      },
      // Add more items here if needed
    ];

    const response = await fetch(`https://stripe-backend-umber.vercel.app/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }), // Send items here
    });

    if (!response.ok) {
      // Handle error response
      const error = await response.json();
      console.error('Error creating checkout session:', error);
      setLoading(false); // Set loading to false if there's an error
      return;
    }

    const sessionId = await response.json();
    // Redirect to Stripe Checkout
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    await stripe.redirectToCheckout({ sessionId: sessionId.id });
  };

  return (
    <div className='mx-auto w-full flex flex-col gap-4 items-center justify-center mt-8'> 
      <h1>Total Amount: ${total}</h1>
      <button 
        onClick={handleCheckout} 
        className={`bg-green-700 rounded-md text-white text-xl px-4 py-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Disable the button while loading
      >
        {loading ? 'Processing...' : 'Are You Confirm?'} {/* Change button text when loading */}
      </button>
    </div>
  );
};

export default CheckoutForm;
