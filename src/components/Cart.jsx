import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CartCard from './CartCard';
import { totalCart } from '../utils/cartSlice';
import Emptycart from './Emptycart';


const Cart = () => {
  const cartData = useSelector((store) => store.cart.item);
  const total = useSelector((store) => store.cart.totalCart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    dispatch(totalCart());
  }, [cartData, dispatch]);

  const handleCheckout = () => {
    // Navigate to the checkout page and pass the total amount
    navigate('/checkout', { state: { amount: total } });
  };

  if (total === 0) {
    return <Emptycart />;
  }

  return (
    <div className='flex md:flex-row flex-col w-[95%] md:w-[1150px] mx-auto md:gap-12'>
      <div className='md:w-[60%]'>
        {cartData.map((e) => {
          return <CartCard {...e} key={e.id} />;
        })}
      </div>
      <div className='flex gap-1 flex-col mt-20'>
        <p className='text-green-700 font-bold text-xl'>YOUR CART</p>
        <p className='text-green-700 font-bold text-5xl'>SUMMARY</p>
        <p className='text-xl text-[#434d5c] font-bold'>Total items: {cartData.length}</p>
        <p className='text-xl text-[#434d5c] font-bold mt-8'>Total amount: {total}</p>
        <button
          className='bg-green-700 text-white text-2xl font-bold rounded-md px-16 py-2'
          onClick={handleCheckout} // Handle button click
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
