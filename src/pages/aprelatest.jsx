export const PostLatestSection = () => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Section : AIMEZ-VOUS LES DÉCHETS DOMESTIQUES OU D'ENTREPRISE */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              AIMEZ-VOUS LES DÉCHETS DOMESTIQUES OU D'ENTREPRISE ?
            </h2>
            <p className="text-center text-lg text-gray-600 mb-10">
              Gérer les déchets efficacement est une responsabilité partagée par
              chaque individu et entreprise. Rejoignez-nous pour construire un
              avenir plus propre et durable grâce à une gestion responsable des
              déchets.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => alert('Agissez maintenant !')}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-700 transition"
              >
                Agissez Maintenant
              </button>
            </div>
          </div>
        </section>
  
        {/* Section : Texte sur fond vert */}
        <section className="bg-green-700 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              COMMENCEZ À GÉRER LES DÉCHETS DE LA BONNE MANIÈRE
            </h2>
            <p className="text-center text-lg text-gray-100 mb-8">
              Prenons ensemble les bonnes décisions pour améliorer la gestion des
              déchets. Que ce soit à domicile ou en entreprise, nous vous offrons
              des outils et des conseils pour réussir.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => alert('Contactez-nous maintenant !')}
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-200 transition"
              >
                Contactez-Nous
              </button>
            </div>
          
          </div>
        </section>
      
      </div>
    );
  };
  