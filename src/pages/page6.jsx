import React from 'react'
import A from '../assets/vv.jpg'
import D from '../assets/D.jpg'
import C from '../assets/C.jpg'
import E from '../assets/cc.jpg'

export const Page6 = () => {
  return (
    <div>
      <div className='bg-green-950 w-full h-60'>
        <div className='text-center text-white p-3 m-4 '>
<p>Lorem ipsum dolor sit amet.</p>
<h2>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.</h2>
</div>
<div className='flex items-center justify-center grid-cols-4'>
 <div className='p-4'>
    <img src={A} className='w-full h-[225px]' alt="" />
    <p>Lorem, ipsum dolor.</p>
    <h3>Lorem ipsum dolor sit amet.</h3>
 </div>
 <div className='p-4'>
    <img src={D} className='w-full h-[225px]' alt="" />
    <p>Lorem, ipsum dolor.</p>
    <h3>Lorem ipsum dolor sit amet.</h3>
 </div>
 <div className='p-4'> 
    <img src={C} className='w-full h-[225px]' alt="" />
    <p>Lorem, ipsum dolor.</p>
    <h3>Lorem ipsum dolor sit amet.</h3>
 </div>
 <div className='p-4'>
    <img src={E} className='w-full h-[225px]' alt="" />
    <p>Lorem, ipsum dolor.</p>
    <h3>Lorem ipsum dolor sit amet.</h3>
 </div>
</div>
      </div>
    </div>
  )
}

export default Page6

