import React from 'react'
import { Link } from 'react-router-dom'

const Emptycart = () => {
  return (
    <div className='flex justify-center items-center flex-col mt-40 gap-4'>
        <h1 className=' font-bold text-2xl text-gray-700 '>Your cart is empty </h1>
        <Link to="/"><button className='px-4 py-2 bg-green-700 font-bold rounded-lg text-white text-xl border-none'> SHOP NOW</button></Link>
    </div>
  )
}

export default Emptycart