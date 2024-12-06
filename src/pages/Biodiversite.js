import React from 'react';
import { Card } from 'primereact/card';

const Biodiversite = () => {
  return (
    <div className="bg-gray-100 w-full">
    <div className="py-8 px-6 mx-auto max-w-4xl">
      <Card className="mb-6 p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          L’ADN Humain et la Biodiversité de l’Océan : Les Codes de la Vie
        </h1>
        <p className="text-lg mb-6">
          L'ADN humain et la biodiversité des océans jouent tous deux un rôle fondamental dans le maintien de la vie. Tandis que l'ADN contient l'information génétique nécessaire pour construire et réguler notre corps, la biodiversité marine constitue un vaste réservoir de ressources biologiques essentielles à l’équilibre des écosystèmes et à la survie de nombreuses espèces, y compris l’humanité.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">L’ADN : La Recette Universelle de la Vie</h2>
        <p className="mb-4">
          L’ADN, ou acide désoxyribonucléique, est constitué de seulement 4 bases azotées (A, T, C, G), mais leur combinaison permet de créer des millions de variations uniques. Chaque cellule humaine contient environ 2 mètres d'ADN, condensés pour tenir dans un espace microscopique. Ce code génétique unique définit tout, de la couleur des yeux à la susceptibilité aux maladies.
        </p>
        <p>
          Avec 3 milliards de paires de bases, l'ADN humain est une bibliothèque biologique essentielle, similaire à la diversité d'espèces que l'on trouve dans les océans.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">La Biodiversité Océanique : L'ADN de la Planète</h2>
        <p className="mb-4">
          Les océans abritent 80% de la vie sur Terre, incluant environ 2 millions d’espèces identifiées, avec potentiellement des millions encore à découvrir. Cette biodiversité est le fruit de milliards d'années d'évolution, tout comme l'ADN humain est le produit de mutations et de sélections sur des générations.
        </p>
        <p>
          Les océans fournissent non seulement de la nourriture et de l'oxygène (jusqu’à 50% du dioxygène atmosphérique), mais aussi des composants médicaux trouvés dans des espèces marines uniques, faisant de leur biodiversité un trésor inestimable.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Similitudes Clés</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Complexité à partir de la simplicité : L'ADN repose sur 4 bases, tandis que la biodiversité marine naît de quelques éléments fondamentaux (l'eau, les nutriments, la lumière).
          </li>
          <li>
            Résilience et adaptabilité : L'ADN évolue pour s’adapter à l’environnement, tout comme la biodiversité marine s’ajuste face au changement climatique.
          </li>
          <li>
            Source de vie : L'ADN est la base de toutes les formes de vie, et les océans regorgent de la majorité des formes de vie connues.
          </li>
        </ul>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enjeux et Solutions</h2>
        <p>
          La perte de biodiversité océanique, due à la surpêche, à la pollution, et au réchauffement climatique, équivaut à perdre les pages d’un immense livre biologique, tout comme des mutations dangereuses peuvent altérer l’ADN. La conservation des écosystèmes marins est essentielle pour préserver ce patrimoine génétique global.
        </p>
      </Card>

      </div>
    </div>
  );
};

export default Biodiversite;
