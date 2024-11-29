import React from 'react';
import Logo from '../assets/logo.png';
import Heart from '../assets/heart_10975786.png';
import Message from '../assets/message_210684.png';
import Snapchat from '../assets/snapchat_10180748.png';
import Social from '../assets/social_15281266.png';
import Phone from '../assets/phone_5549893.png';
import Gmail from '../assets/gmail_104069.png';
import Search from '../assets/search_6099960.png';

export const Page1 = () => {
  return (
    <>
      <section className="bg-cover bg-no-repeat h-screen bg-center w-full"
        style={{ backgroundImage: `url(${require('../assets/mon-image.jpg')})` }}>

        {/* Barre de navigation fixée en haut */}
        <nav className='bg-stone-200 fixed top-0 left-0 w-full z-10'>
          <div className='flex mx-20 p-5'>
            <img src={Logo} className='w-9 rounded-full' alt="" />
            <h1 className='text-2xl mx-2'>Eco<span className='text-lime-600'>Déchets</span></h1>
            <div className='flex mx-64'>
              <img src={Heart} className='w-7 h-7 p-1' alt="" />
              <img src={Message} className='w-7 h-7 p-1' alt="" />
              <img src={Snapchat} className='w-7 h-7 p-1' alt="" />
              <img src={Social} className='w-7 h-7 p-1' alt="" />
              <div className='flex mx-1'>
                <img src={Phone} className='w-7 h-7 ml-12' alt="" />
                <p>77 000 00 00 </p>
              </div>
              <div className='flex mx-1 '>
                <img src={Gmail} className='w-7 h-7 ml-24 ' alt="" />
                <p>ecodechets@gmail.com</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Menu de navigation */}
        <nav className='flex bg-amber-200 w-1/2 justify-center mx-auto mt-16'>
          <ul className='flex p-4 mx-4'>
            <li className='m-3 cursor-pointer hover:text-lime-600'>Accueil</li>
            <li className='m-3 cursor-pointer hover:text-lime-600'>A propos</li>
            <li className='m-3 cursor-pointer hover:text-lime-600'>Nos services</li>
            
            <li className='m-3 cursor-pointer hover:text-lime-600'>Nouvelles</li>
            <li className='m-3 cursor-pointer hover:text-lime-600'>Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| </li>
          </ul>
          <button>
            <img src={Search} className='w-5 h-5 ml-7 mb-6' alt="" />
          </button>
        </nav>

        <div className='p-4 ml-20'>
          <h2 className='text-3xl mt-64 p-4 w-60 text-lime-400'>
            Solution de collecte des déchets pour les domiciles et les entreprises
          </h2>

          <button className='w-40 rounded-lg p-4 bg-yellow-400'>Demander</button>
        </div>
      </section>
    </>
  );
}

export default Page1;
