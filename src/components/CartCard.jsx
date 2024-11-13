import React from 'react'
import { useDispatch  } from 'react-redux'
import { removeCart } from '../utils/cartSlice';
import { toast } from 'react-hot-toast';
 

const CartCard = ({image , title , price , description , id }) => {

  const notify = ()=> toast.error("Item removed from cart!")
  
  
  const dispatch = useDispatch();

  const handleRemove = ()=>{

    dispatch(removeCart(id))
    notify()
  } 
  return (
    <div className='border-b-2 border-[#64748B] flex gap-12 mt-6 py-2 h-64'>
      <div className="flex gap-4 w-2/5 bg-cover">
        <img src={ image} alt="" className='py-5' />
      </div>
       <div className='flex flex-col gap-4 pt-4'>
        <p className='text-[#000000] text-[20px] font-semibold'>{ title}</p>
        <p className='text-[#334155] text-[1.1rem]'>{description.slice(0,100)}...</p>
        <div className='flex justify-between'>
          <p className='text-green-600 font-bold text-xl'>${ price}</p>
          <button onClick={()=>handleRemove()}>remove</button>
        </div>
       </div>

    </div>
  )
}

export default CartCard