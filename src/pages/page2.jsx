import React from 'react';
import MonImage from '../assets/mon-image.jpg';
import Kim from '../assets/kim.jpg';
import cl from '../assets/cl.jpg';
import tl from '../assets/tl.jpeg';

export const Page2 = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="flex justify-between items-center px-14 py-10">
        {/* Texte */}
        <div className="w-1/2">
          <h5 className="text-lg font-semibold text-gray-600">Solutions de Gestion des Déchets</h5>
          <h2 className="text-3xl font-bold text-gray-800 mt-3 leading-tight">
            Une approche innovante pour un environnement plus propre
          </h2>
          <p className="text-xl text-gray-600 mt-5">
            Nous offrons des solutions adaptées pour la collecte et la gestion des déchets, 
            qu’il s’agisse des ménages ou des entreprises. Rejoignez-nous pour réduire votre empreinte écologique 
            et contribuer à un avenir durable.
          </p>
        </div>

        {/* Images */}
        <div className="relative w-1/2 flex justify-center">
          <img
            src={Kim}
            className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg"
            alt="Équipe travaillant à la collecte des déchets"
          />
          <img
            src={MonImage}
            className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg absolute top-20 left-20 border-4 border-white"
            alt="Processus de tri et de recyclage"
          />
        </div>
      </div>
{/* Section 2 */}
<div className="flex justify-between items-center py-10">
  <div className="text-center w-1/2 px-5">
    <img 
      src={tl} 
      className="w-40 h-40 mx-auto object-cover rounded-full" 
      alt="Icône de tri des déchets" 
    />
    <h2 className="text-2xl font-bold text-gray-800 mt-5">Tri des Déchets</h2>
    <p className="text-lg text-gray-600 mt-3">
      Nous vous aidons à mieux trier vos déchets<br />
      pour favoriser le recyclage et réduire<br />
      la pollution.
    </p>
  </div>
  <div className="text-center w-1/2 px-5">
    <img 
      src={cl} 
      className="w-40 h-40 mx-auto object-cover rounded-full" 
      alt="Icône de transport des déchets" 
    />
    <h2 className="text-2xl font-bold text-gray-800 mt-5">Collecte Rapide</h2>
    <p className="text-lg text-gray-600 mt-3">
      Notre service assure une collecte rapide<br />
      et efficace, en respectant les normes<br />
      environnementales.
    </p>
  </div>
</div>





      
    </>
  );
};

export default Page2;
