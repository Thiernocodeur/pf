import React from 'react';
import A from '../assets/a.jpg';
import B from '../assets/b.jpg';
import Kim from '../assets/kim.jpg';

export const Page4 = () => {
  return (
    <>
      <div className="flex justify-between p-7 bg-indigo-100">
        <div>
          <p>Protégez l'environnement, gérez vos déchets efficacement.</p>
          <h1 className="text-3xl">Votre partenaire en gestion des déchets.</h1>
        </div>
        <div>
          <p className="w-[350px]">
            Nous vous aidons à réduire votre impact environnemental grâce à des solutions de tri et de recyclage adaptées à vos besoins.
          </p>
        </div>
      </div>
      <main className="container mx-auto p-5">
        <section className="grid grid-cols-3 gap-8">
          <article className="shadow rounded-xl">
            <img src={A} className="w-full" alt="Service de collecte des déchets" />
            <div className="px-6 py-4">
              <h2 className="mb-3">Service de collecte.</h2>
              <p className="text-gray-400">
                Nous collectons les déchets domestiques et commerciaux pour une gestion durable et écologique.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#collecte</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#recyclage</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#écologie</span>
            </div>
          </article>

          <article className="shadow rounded-xl">
            <img src={B} className="w-full h-[225px]" alt="Service de tri des déchets" />
            <div className="px-6 py-4">
              <h2 className="mb-3">Service de tri.</h2>
              <p className="text-gray-400">
                Facilitez le tri de vos déchets grâce à nos solutions innovantes adaptées à vos besoins.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#tri</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#durable</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#solutions</span>
            </div>
          </article>

          <article className="shadow rounded-xl">
            <img src={Kim} className="w-full h-[225px]" alt="Recyclage pour un avenir vert" />
            <div className="px-6 py-4">
              <h2 className="mb-3">Recyclage.</h2>
              <p className="text-gray-400">
                Engagez-vous pour un avenir vert en recyclant vos déchets efficacement avec nos services.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#recyclage</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#avenir</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full mr-3 text-sm font-semibold">#vert</span>
            </div>
          </article>
        </section>

        <div className="flex">
          <div className="ml-48">
            <img src={A} className="w-[400px] pt-7 h-[300px]" alt="Équipe en action pour la gestion des déchets" />
          </div>
          <div className="bg-lime-700 mt-16 w-1/3 h-72">
            <div className="mt-16 text-center text-white">
              <h2>Rejoignez-nous.</h2>
              <p className="pt-7">
                Prenez part à nos initiatives pour un environnement plus propre et plus sain dès aujourd'hui.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page4;
