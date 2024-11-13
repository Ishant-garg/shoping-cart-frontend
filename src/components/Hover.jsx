import React from 'react'

const Hover = ({b}) => {
  return (
    <div className='text-9xl w-fit absolute translate-x-[290%] bg-cyan-50  mt-[-20px]' onMouseEnter={()=>b(false)} onMouseLeave={()=>b(true)}>Hover</div>
  )
}

export default Hover