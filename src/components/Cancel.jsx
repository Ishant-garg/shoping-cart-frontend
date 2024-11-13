import React from 'react';

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-700">Payment Cancelled</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your payment was not completed. Please try again or contact support if you need assistance.
      </p>
      <a href="/" className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Return to Home
      </a>
    </div>
  );
};

export default Cancel;
