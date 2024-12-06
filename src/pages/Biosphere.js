import React from 'react';
import { Card } from 'primereact/card';

const Biosphere = () => {
  return (
    <div className="bg-gray-100 w-full">
    <div className="py-8 px-6 mx-auto max-w-4xl">
      <Card className="mb-6 p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Le Cerveau Humain et la Biosphère Océanique : Des Réseaux Complexes de Vie
        </h1>
        <p className="text-lg mb-6">
          Le cerveau humain, avec ses milliards de neurones connectés en un réseau incroyablement complexe, peut être comparé à la biosphère océanique. Tout comme le cerveau contrôle et régule l’ensemble du corps humain, les océans, qui couvrent 70 % de la surface de la Terre, jouent un rôle central dans la régulation des cycles vitaux et climatiques de la planète.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Le Cerveau : Un Chef d’Orchestre</h2>
        <p className="mb-4">
          Le cerveau humain contient environ 86 milliards de neurones interconnectés par des trillions de synapses. Chaque neurone agit comme un nœud dans un réseau, transmettant des signaux électriques et chimiques pour réguler des fonctions vitales comme le mouvement, la respiration et les émotions. Ce réseau complexe peut traiter des informations à une vitesse atteignant 120 mètres par seconde.
        </p>
        <p>
          Avec une consommation d’environ 20 % de l’énergie corporelle totale, malgré ne représentant que 2 % de la masse corporelle, le cerveau humain est une machine hautement efficace et indispensable.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">La Biosphère Océanique : Un Réseau de Vie</h2>
        <p className="mb-4">
          Les océans abritent des millions d’espèces, allant du microscopique phytoplancton aux gigantesques baleines. Tout comme les neurones dans le cerveau, ces espèces sont interconnectées dans des réseaux écologiques complexes. Les interactions entre prédateurs, proies et producteurs primaires assurent un équilibre crucial pour la vie sur Terre.
        </p>
        <p>
          Les océans capturent environ 30 % du dioxyde de carbone émis par l’activité humaine et produisent jusqu’à 50 % de l’oxygène que nous respirons. Ils régulent également les températures mondiales grâce à leur capacité à stocker la chaleur, agissant comme une véritable mémoire climatique.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Similitudes Clés</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Les deux systèmes fonctionnent grâce à des réseaux interconnectés où chaque élément a un rôle précis.</li>
          <li>Le cerveau, tout comme les océans, consomme et régule de l’énergie pour maintenir l’équilibre global.</li>
          <li>Les deux possèdent une capacité d’adaptation face aux perturbations, bien que des dommages excessifs puissent entraîner des conséquences irréversibles.</li>
        </ul>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enjeux et Perspectives</h2>
        <p>
          Une dégradation de la biosphère océanique, due à la pollution et au réchauffement climatique, perturbe ces réseaux interconnectés, tout comme des lésions dans le cerveau altèrent les fonctions cognitives. La préservation des océans est donc essentielle, non seulement pour la santé de la planète, mais aussi pour garantir un avenir durable pour l’humanité.
        </p>
      </Card>

      </div>
    </div>
  );
};

export default Biosphere;
