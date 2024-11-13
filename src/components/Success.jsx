import React from 'react';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Thank you for your purchase! Your transaction has been completed successfully.
      </p>
      <a href="/" className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Return to Home
      </a>
    </div>
  );
};

export default Success;
