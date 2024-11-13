 import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Hover from './Hover'
import { useState } from 'react'
const Nav = () => {
    const[bool , setBool ] = useState(true);

  const cartItem = useSelector(store => store.cart.item)
  
  const cartLength = cartItem.length > 0 ? cartItem.length : null

  return (
    <div className="h-20 bg-[#0F172A]">
      <div className='w-[90%] md:w-[1150px] mx-auto flex justify-between  py-4'>
      <div className=''>
      <Link to="/">  <img src="https://codehelp-shopping-cart.netlify.app/logo.png" alt="" className="w-40"/></Link>
      </div>

      <div className='flex gap-8 items-center'>
       <Link to="/"> <p  className="text-white mt-[-10px] text-xl hover:text-green-500 cursor-pointer duration-[.4s]    transition-transform" onMouseOver={()=>setBool(!bool) } onMouseLeave={()=>setBool(!bool)} >Home</p></Link>
       <Link to="/cart" className='mt-2'> <FaShoppingCart className='text-white text-4xl  hover:text-green-500 cursor-pointer duration-[.4s]  '/>
       <div className='text-white   bg-green-500 rounded-full px-2  relative left-6 bottom-10 animate-bounce  text-center	'> {cartLength }  </div>
      </Link></div></div>
      {/* {
        bool ? null : <Hover b={setBool}/>
      } */}
       
    </div>
  )
}

export default Nav