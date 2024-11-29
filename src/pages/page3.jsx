import React from 'react';

export const Page3 = () => {
  return (
    <>

    
      {/* Section avec image de fond */}
      <div
        className="bg-cover bg-no-repeat h-[400px] bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${require('../assets/kim.jpg')})` }}
      >
        {/* Titre au centre */}
        <h2 className="text-center text-4xl font-bold text-lime-800 leading-relaxed">
          Gérer les Déchets pour un Avenir plus Propre <br />
          et Responsable
        </h2>

        {/* Boutons */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button className="bg-amber-400 px-6 py-3 rounded-md text-black font-medium hover:bg-amber-500 transition-all">
            Nos Services
          </button>
          <button className="bg-green-600 px-6 py-3 rounded-md text-white font-medium hover:bg-green-700 transition-all">
            Contactez-Nous
          </button>
        </div>
      </div>
    </>
  );
};

export default Page3;
