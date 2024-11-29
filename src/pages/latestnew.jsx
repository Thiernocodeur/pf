import React from 'react';

export const LatestNews = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h2 className="text-center text-3xl font-bold mb-6">DERNIÈRES NOUVELLES & ARTICLES</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Première carte */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Comment recycler les déchets plastiques efficacement"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Comment recycler les déchets plastiques efficacement</h3>
            <p className="text-gray-600 mb-4">
              Découvrez les meilleures pratiques pour recycler les déchets plastiques et réduire leur impact sur l'environnement.
            </p>
            <a
              href="https://example.com/recycle-plastic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-medium hover:underline"
            >
              Lire la suite
            </a>
          </div>
        </div>

        {/* Deuxième carte */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Les 5 principaux avantages de la gestion des déchets"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Les 5 principaux avantages de la gestion des déchets</h3>
            <p className="text-gray-600 mb-4">
              Découvrez les avantages de mettre en place une stratégie de gestion des déchets solides pour votre maison ou entreprise.
            </p>
            <a
              href="https://example.com/waste-management-benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-medium hover:underline"
            >
              Lire la suite
            </a>
          </div>
        </div>

        {/* Troisième carte */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
          <img
            src="https://via.placeholder.com/300x200"
            alt="10 astuces pour réduire les déchets ménagers"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">10 astuces pour réduire les déchets ménagers</h3>
            <p className="text-gray-600 mb-4">
              Suivez ces astuces simples pour réduire les déchets à la maison et adopter un mode de vie plus durable.
            </p>
            <a
              href="https://example.com/reducing-household-waste"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 font-medium hover:underline"
            >
              Lire la suite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
