import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Phytoplancton = () => {
  return (
    <div className="bg-gray-100 w-full">
    <div className="py-8 px-6 mx-auto max-w-4xl">
      <Card className="mb-6 p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Les Poumons Humains et le Phytoplancton : Une Respiration Planétaire
        </h1>
        <p className="text-lg mb-6">
          Les poumons humains permettent à chaque individu de respirer, tandis que le phytoplancton produit 50% de l’oxygène de la planète. Ces deux systèmes, bien que différents en échelle et en structure, partagent une fonction vitale : le maintien du cycle de l’oxygène indispensable à la vie sur Terre.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Les Poumons : Un Mécanisme de Filtration</h2>
        <p className="mb-4">
          Chaque jour, les poumons humains filtrent environ **10 000 litres d'air**, extrayant l’oxygène pour alimenter le sang. Avec une surface d'échange équivalente à celle d’un terrain de tennis, les poumons transforment chaque inspiration en énergie vitale pour les cellules.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Le Phytoplancton : Les Poumons de l’Océan</h2>
        <p className="mb-4">
          Les phytoplanctons, microscopiques mais puissants, génèrent **50% de l’oxygène mondial** grâce à la photosynthèse. Présents en masse à la surface des océans, ils absorbent le dioxyde de carbone (CO₂) et libèrent de l'oxygène, jouant un rôle crucial dans la lutte contre le réchauffement climatique.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Similitudes Clés</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            **Échange gazeux** : Les poumons humains échangent l’oxygène et le dioxyde de carbone avec le sang, tandis que le phytoplancton fait de même avec l’atmosphère.
          </li>
          <li>
            **Impact global** : Les humains dépendent de l’oxygène produit par les océans, tout comme le phytoplancton dépend du CO₂ émis par les êtres vivants.
          </li>
          <li>
            **Sensibilité environnementale** : Une mauvaise qualité de l'air nuit aux poumons, tout comme la pollution de l'eau affecte le phytoplancton.
          </li>
        </ul>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enjeux et Solutions</h2>
        <p>
          Protéger les océans, habitat du phytoplancton, est aussi vital que préserver l'air que nous respirons. La pollution, qu’elle provienne des plastiques ou des émissions de CO₂, menace ces "poumons" naturels de la planète. Chaque action individuelle pour réduire l'empreinte carbone contribue à maintenir cet équilibre fragile.
        </p>
      </Card>
    </div>
    </div>
  );
};

export default Phytoplancton;
