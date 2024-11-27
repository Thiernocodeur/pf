import React from 'react'
import W from '../assets/carte_senegal.jpg'

export const Page7 = () => {
  return (
    <div>
        <div className='flex justify-between m-56'>
      <div>
        <form action="">
            <div>
            <input type="text" className='p-6  pt-5' placeholder='Votre Nom'/>
            </div>
            <div>
            <input type="text" className='p-6 pt-5' placeholder='Votre Adresse mail'/>
            </div>
            <div>
            <textarea name="" id="">Votre message</textarea>
            </div>
            <button className='p-6 pt-5 bg-green-950 rounded-xl text-white'>Envoyer</button>
        </form>
      </div>
      <div>
        <img src={W} className='w-[450px]' alt="" />
      </div>
      </div>
      <footer className='text-center'>
      <p>Copyright &copy;2024 by ecodechets | tous droits Réservés.</p>
      </footer>
    </div>
  )
}

export default Page7
