import React from 'react';

export const PageTwoFive = () => {
  return (
    <div className="flex justify-center bg-green-700 py-16">
      {/* Conteneur centré */}
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-xl">
        <div className="flex">
          {/* Section gauche */}
          <div className="w-1/3 pr-8">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nous offrons des solutions adaptées à vos besoins en matière de gestion des déchets. Optez pour une entreprise respectueuse de l'environnement.
            </p>
          </div>

          {/* Section du milieu */}
          <div className="w-1/3 px-8 border-l border-gray-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nos Avantages :</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>Collecte rapide et fiable</li>
              <li>Sensibilisation environnementale</li>
              <li>Solutions économiques et durables</li>
              <li>Respect des normes écologiques</li>
            </ul>
          </div>

          {/* Section droite */}
          <div className="w-1/3 pl-8 border-l border-gray-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Notre Engagement :</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>Collaboration avec les communautés locales</li>
              <li>Soutien aux initiatives de recyclage</li>
              <li>Promotion des pratiques éco-responsables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwoFive;
