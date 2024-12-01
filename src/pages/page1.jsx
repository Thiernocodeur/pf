import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Heart from '../assets/heart_10975786.png';
import Message from '../assets/message_210684.png';
import Snapchat from '../assets/snapchat_10180748.png';
import Social from '../assets/social_15281266.png';
import Phone from '../assets/phone_5549893.png';
import Gmail from '../assets/gmail_104069.png';
import Search from '../assets/search_6099960.png';
import { registerUser, loginUser } from '../services/authService';

export const Page1 = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isRequestFormVisible, setIsRequestFormVisible] = useState(false); // Formulaire de demande
  const [requestDetails, setRequestDetails] = useState(''); // Détails de la demande
  const [errorMessage, setErrorMessage] = useState(''); // Message d'erreur

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      await registerUser(userData);
      alert('Utilisateur inscrit avec succès!');
      setIsSignupVisible(false);
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      setErrorMessage('Erreur lors de l\'inscription, veuillez réessayer.'); // Display error message
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    try {
      const response = await loginUser(userData);
      localStorage.setItem('token', response.token);
      setIsAuthenticated(true);
      alert('Connexion réussie!');
      setIsLoginVisible(false);
      setErrorMessage(''); // Reset error message
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setErrorMessage('Erreur lors de la connexion, veuillez vérifier vos identifiants.'); // Display error message
    }
  };

  const handleRequest = () => {
    if (!isAuthenticated) {
      alert('Vous devez être connecté pour faire une demande');
      return;
    }
    setIsRequestFormVisible(true); // Afficher le formulaire de demande
  };

  const handleSubmitRequest = () => {
    alert(`Demande enregistrée : ${requestDetails}`);
    setIsRequestFormVisible(false); // Masquer le formulaire après soumission
  };

  return (
    <section className="bg-cover bg-no-repeat h-screen bg-center w-full" 
      style={{ backgroundImage: `url(${require('../assets/mon-image.jpg')})` }}>

      <nav className='bg-stone-200 fixed top-0 left-0 w-full z-10'>
        <div className='flex justify-between items-center mx-20 p-5'>
          <div className='flex'>
            <img src={Logo} className='w-9 rounded-full' alt="" />
            <h1 className='text-2xl mx-2'>Eco<span className='text-lime-600'>Déchets</span></h1>
          </div>
          <div className='flex items-center'>
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
            <div className='ml-auto'>
              {isAuthenticated ? (
                <span className="text-green-600">Bienvenue !</span>
              ) : (
                <>
                  <button onClick={() => setIsSignupVisible(true)} className="px-4 py-2 text-white bg-blue-600 rounded-lg ml-4">S'inscrire</button>
                  <button onClick={() => setIsLoginVisible(true)} className="px-4 py-2 text-white bg-green-600 rounded-lg ml-4">Se connecter</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Formulaire de demande */}
      {isRequestFormVisible && (
        <div className='fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-20 w-80'>
          <div className="flex justify-between items-center mb-4">
            <h2 className='text-2xl'>Faire une Demande</h2>
            <button onClick={() => setIsRequestFormVisible(false)} className="text-xl text-red-600">X</button>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmitRequest(); }}>
            <label className='block mb-2'>
              Détails de la demande :
              <textarea
                value={requestDetails}
                onChange={(e) => setRequestDetails(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
            </label>
            <button type="submit" className="w-full py-2 bg-yellow-400 text-white rounded mt-4">Valider la Demande</button>
          </form>
        </div>
      )}

      {/* Formulaire d'inscription */}
      {isSignupVisible && (
        <div className='fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-20 w-80'>
          <div className="flex justify-between items-center mb-4">
            <h2 className='text-2xl'>S'inscrire</h2>
            <button onClick={() => setIsSignupVisible(false)} className="text-xl text-red-600">X</button>
          </div>
          <form onSubmit={handleSignup}>
            <label className='block mb-2'>
              Email :
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
            </label>
            <label className='block mb-2'>
              Mot de passe :
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
            </label>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded mt-4">S'inscrire</button>
          </form>
        </div>
      )}

      {/* Formulaire de connexion */}
      {isLoginVisible && (
        <div className='fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg z-20 w-80'>
          <div className="flex justify-between items-center mb-4">
            <h2 className='text-2xl'>Se connecter</h2>
            <button onClick={() => setIsLoginVisible(false)} className="text-xl text-red-600">X</button>
          </div>
          <form onSubmit={handleLogin}>
            <label className='block mb-2'>
              Email :
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
            </label>
            <label className='block mb-2'>
              Mot de passe :
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />
            </label>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <button type="submit" className="w-full py-2 bg-green-600 text-white rounded mt-4">Se connecter</button>
          </form>
        </div>
      )}

      {/* Menu de navigation */}
      <nav className='flex bg-amber-200 w-1/2 justify-center mx-auto mt-16'>
        <ul className='flex p-4 mx-4'>
          <li className='m-3 cursor-pointer hover:text-lime-600'>Accueil</li>
          <li className='m-3 cursor-pointer hover:text-lime-600'>A propos</li>
          <li className='m-3 cursor-pointer hover:text-lime-600'>Nos services</li>
          <li className='m-3 cursor-pointer hover:text-lime-600'>Nouvelles</li>
          <li className='m-3 cursor-pointer hover:text-lime-600'>Contact</li>
        </ul>
        <button>
          <img src={Search} className='w-5 h-5 ml-7 mb-6' alt="" />
        </button>
      </nav>

      <div className='p-4 ml-20'>
        <h2 className='text-3xl mt-64 p-4 w-60 text-lime-400'>
          Solution de collecte des déchets pour les domiciles et les entreprises
        </h2>

        <button onClick={handleRequest} className='w-40 rounded-lg p-4 bg-yellow-400'>
          Demander
        </button>
      </div>
    </section>
  );
};

export default Page1;
