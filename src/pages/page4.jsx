import React from 'react'
import A from '../assets/a.jpg'
import B from '../assets/b.jpg'
import Kim from '../assets/kim.jpg'

export const Page4 = () => {
  return (
    <>
<div className='flex justify-between p-7'>
<div>
<p>Lorem ipsum dolor sit, Lorem ipsum dolor sit.</p>
<h1 className='text-3xl'>Lorem ipsum dolor sit.</h1>
</div>
<div>
    <p className='w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, et
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, et
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, et
   </p>
</div>
</div>
<div className='flex justify-center'>
    <img src={A} className='w-[400px] p-3 h-[300px]' alt="" />
    <div className='w-[100px] bg-black'>

    </div>
    <img src={B} className='w-[400px] p-3 h-[300px]' alt="" />
    <img src={Kim} className='w-[400px] p-3 h-[300px]' alt="" />
</div>
    </>
  )
}

export default Page4
