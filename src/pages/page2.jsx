import React from 'react'
import MonImage from '../assets/mon-image.jpg'
import Kim from '../assets/kim.jpg'

export const Page2 = () => {
  return (
    <>
    <div className='flex'>
    <div  className='ml-14 '>
       <h5>Lorem ipsum dolor sit amet</h5>
       <h2 className='text-3xl w-40'>Lorem ipsum dolor sit amet consectetur.</h2>
       <p className='text-xl w-1/2 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, inventore error.
         Beatae dolores eaque quaerat nisi consequatur nam autem nobis.</p>
         </div>
         <div> 
         <img src={Kim} className='w-[400px] h-[200px] mt-24 rotate-' alt="" />
         <img src={MonImage} className='w-[400px] h-[200px]' alt="" />
         </div>
    </div>
   
    <div className='flex p-7 '>
            <div className='mr-10'>
                <img src={MonImage} className='w-8 h-7' alt="" />
                <h2 className='text-xl'>Lorem, ipsum dolor.</h2>
                <p className='w-36'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolor?</p>
            </div>
            <div>
                <img src={MonImage} className='w-8 h-7' alt="" />
                <h2 className='text-xl'>Lorem, ipsum dolor.</h2>
                <p className='w-36'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolor?</p>
            </div>
         </div>
         <div className='bg-lime-700 w-1/2 h-48 m-auto'>
         </div>
    </>
  )
}

export default Page2
