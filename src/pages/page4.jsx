import React from 'react'
import A from '../assets/a.jpg'
import B from '../assets/b.jpg'
import Kim from '../assets/kim.jpg'

export const Page4 = () => {
  return (
    <>
<div className='flex justify-between p-7 bg-indigo-100'>
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
  <main className="container mx-auto p-5">
    <section className='grid grid-cols-3 gap-8'>
    <article className='shadow rounded-xl'>
    <img c src={A} className='w-full' alt="" />
    <div className='px-6 py-4'>
    <h2 className='mb-3'>Lorem, ipsum dolor.</h2>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/>
       Quam iste recusandae<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ut placeat.<br/></p>
       </div>
       <div className='px-6 py-4'>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#photo</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#santé</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#self</span>
       </div>
    </article>
    
    <article className='shadow rounded-xl'>
    <img src={B} className='w-full h-[225px]'  alt="" />
    <div className='px-6 py-4'>
    <h2 className='mb-3'>Lorem, ipsum dolor.</h2>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/>
       Quam iste recusandae<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ut placeat.<br/></p>
       </div>
       <div className='px-6 py-4'>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#photo</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#santé</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#self</span>
       </div>
    </article>
    
    <article className='shadow rounded-xl'>
    <img src={Kim} className='w-full h-[225px]'  alt="" />
    <div className='px-6 py-4'>
    <h2 className='mb-3'>Lorem, ipsum dolor.</h2>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/>
       Quam iste recusandae<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ut placeat.<br/></p>
       </div>
       <div className='px-6 py-4'>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#photo</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#santé</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold'>#self</span>
       </div>
    </article>
   
    </section>
    <div className='flex'>
    <div className='ml-48'>
    <img c src={A} className='w-[400px] pt-7 h-[300px]' alt="" />
    </div>
    <div className='bg-lime-700 mt-16 w-1/3 h-72'>
    <div className='mt-16 text-center text-white'>
    <h2>Lorem, ipsum?</h2>
    <p className='pt-7'>Lorem ipsum dolor sit <br/>amet consectetur adipisicing elit.<br/>
       Nemo at culpa, <br/>animi excepturi quae aspernatur!</p>
       </div>
    </div>
    </div>
  </main>
    </>
  )
}

export default Page4
