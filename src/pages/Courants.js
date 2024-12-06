import React from 'react';
import { Card } from 'primereact/card';

const Courants = () => {
  return (
    <div className="bg-gray-100 w-full">
    <div className="py-8 px-6 mx-auto max-w-4xl">
      <Card className="mb-6 p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Le Sang Humain et les Courants Océaniques : Flux Essentiels à la Vie
        </h1>
        <p className="text-lg mb-6">
          Le sang humain circule sans relâche dans le corps, tout comme les courants marins traversent les océans. Ces deux systèmes assurent le transport d'éléments vitaux pour maintenir l'équilibre, que ce soit dans l'organisme humain ou dans l'écosystème global. L'étude de leurs similitudes révèle à quel point la nature est ingénieusement connectée.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Le Sang : Un Flux Ininterrompu</h2>
        <p className="mb-4">
          Le sang humain parcourt environ 96 000 kilomètres de vaisseaux sanguins dans le corps, soit plus de deux fois le tour de la Terre. Chaque jour, le cœur pompe environ 7 500 litres de sang, transportant l'oxygène, les nutriments et les hormones nécessaires au fonctionnement cellulaire. En retour, le sang élimine les déchets métaboliques comme le dioxyde de carbone, maintenant ainsi un équilibre chimique essentiel.
        </p>
        <p>
          Ce flux constant est crucial pour la survie de chaque organe et cellule, régulant la température corporelle et soutenant les fonctions immunitaires.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Les Courants Océaniques : Un Transporteur Global</h2>
        <p className="mb-4">
          Les courants océaniques, tels que le Gulf Stream, déplacent d'énormes quantités d'eau autour de la planète. Chaque seconde, ces courants transportent environ 30 fois plus d'eau que tous les fleuves de la Terre réunis. Ils distribuent la chaleur, les nutriments et l'oxygène dans les océans, influençant le climat et soutenant la vie marine.
        </p>
        <p>
          Par exemple, les eaux chaudes du Gulf Stream maintiennent les températures modérées en Europe, tandis que les courants profonds apportent des nutriments essentiels aux écosystèmes marins dans des régions éloignées.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Similitudes Clés</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Les deux systèmes transportent des éléments essentiels à la vie, comme l'oxygène et les nutriments.</li>
          <li>Le sang et les courants régulent la température, l'un dans le corps et l'autre dans les océans.</li>
          <li>Les deux flux sont en constante circulation, garantissant la stabilité de leur environnement respectif.</li>
        </ul>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enjeux et Perspectives</h2>
        <p>
          Les perturbations dans ces systèmes peuvent avoir des effets dévastateurs. Un ralentissement des courants océaniques, causé par le réchauffement climatique, pourrait perturber les régimes météorologiques mondiaux et la biodiversité marine. De même, des troubles circulatoires dans le corps humain peuvent conduire à des maladies graves. Comprendre et protéger ces flux vitaux est essentiel pour notre avenir.
        </p>
      </Card>

    </div>
    </div>
  );
};

export default Courants;
