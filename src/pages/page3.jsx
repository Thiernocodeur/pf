import React from 'react'

export const Page3 = () => {
  return (
    <>
    <div className="bg-cover bg-no-repeat h-[300px] bg-center
        w-full"   style={{ backgroundImage: `url(${require('../assets/kim.jpg')})` }}>
      <h2 className='text-center text-3xl text-lime-800 p-20 '>Lorem ipsum dolor sit amet,
         <br/>consectetur adipisicing.</h2>
         <div className='flex items-center justify-center'>
            <button className='border-0 bg-amber-400 p-2 '>Lorem, ipsum dolor.</button>
            <button className='border-0 bg-green-600 p-2 m-2 text-white'>Lorem, ipsum dolor.</button>
         </div>
    </div>
    </>
  )
}

export default Page3
