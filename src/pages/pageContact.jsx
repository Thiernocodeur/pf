import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import des icônes

export const PageContact = () => {
  return (
    <>
      {/* Section Questions + Formulaire */}
      <div className="flex flex-wrap justify-between p-10 bg-gray-100">
        {/* Partie gauche : Informations */}
        <div className="w-full md:w-1/2 pr-10 mt-8"> {/* Ajout de mt-8 pour espacement supérieur */}
          <h3 className="text-2xl font-bold mb-6">Vous avez des questions ?</h3>

          {/* Informations avec icônes */}
          <div className="space-y-6">
            {/* Téléphone */}
            <div className="flex items-center">
              <FaPhoneAlt className="text-green-500 text-2xl mr-4" />
              <div>
                <h4 className="font-medium text-lg">Téléphone</h4>
                <p className="text-gray-600">+221 33 123 45 67</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="text-green-500 text-2xl mr-4" />
              <div>
                <h4 className="font-medium text-lg">Email</h4>
                <p className="text-gray-600">contact@ecodechets.sn</p>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-green-500 text-2xl mr-4" />
              <div>
                <h4 className="font-medium text-lg">Adresse</h4>
                <p className="text-gray-600">Dakar, Sénégal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite : Formulaire */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Contactez-nous</h3>
          <form className="space-y-5">
            {/* Nom complet */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="nomComplet">
                Nom complet
              </label>
              <input
                type="text"
                id="nomComplet"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Entrez votre nom complet"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Entrez votre adresse e-mail"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Écrivez votre message ici"
              ></textarea>
            </div>

            {/* Bouton Soumettre */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Section Carte de géolocalisation */}
      <div className="mt-10 p-10">
        <h3 className="text-center text-2xl font-bold mb-6">Localisation</h3>
        <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg">
          {/* Intégration de Google Maps (iframe) */}
          <iframe
            title="Carte de géolocalisation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.218878818236!2d-17.48305797735502!3d14.69261818682509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f6c7e741d5%3A0x97162bb1e09dd5bc!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1699649794537!5m2!1sfr!2sfr"
            className="w-full h-full rounded-lg"
            allowFullScreen="true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">&copy; 2024 Gestion des Déchets. Tous droits réservés.</p>
      </footer>
    </>
  );
};

export default PageContact;
