import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Load the Stripe publishable key from the environment variable
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// Log the value of the publishable key for debugging
console.log('Stripe Publishable Key:', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <div>
      <Nav />
      {/* Stripe Elements wrapper */}
      <Elements stripe={stripePromise}>
        <Outlet />
      </Elements>
    </div>
  );
}

export default App;
