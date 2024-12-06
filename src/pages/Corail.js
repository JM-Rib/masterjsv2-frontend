import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Corail = () => {
  return (
    <div className="bg-gray-100 w-full">
    <div className="py-8 px-6 mx-auto max-w-4xl">
      <Card className="mb-6 p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          Les Os Humains et les Récifs Coralliens : Une Structure Essentielle
        </h1>
        <p className="text-lg mb-6">
          Les os humains et les récifs coralliens partagent une fonction clé : fournir un soutien structurel essentiel. Tandis que nos os soutiennent notre corps et protègent nos organes vitaux, les récifs coralliens servent de "squelette" aux écosystèmes marins, abritant 25% de la biodiversité océanique.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Les Os : Un Pilier pour le Corps Humain</h2>
        <p className="mb-4">
          Les os représentent 15% du poids corporel moyen et jouent un rôle crucial dans la structure et la mobilité du corps. Avec environ 206 os, le squelette humain offre à la fois protection et soutien, tout en agissant comme une réserve de minéraux tels que le calcium et le phosphore.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Les Récifs Coralliens : Les Squelettes des Océans</h2>
        <p className="mb-4">
          Les récifs coralliens, constitués principalement de carbonate de calcium, soutiennent 25% des espèces marines, y compris des poissons, des mollusques et des crustacés. Ils couvrent moins de 1% des fonds marins, mais leur rôle est essentiel pour la biodiversité et la protection des côtes contre les vagues et l’érosion.
        </p>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Similitudes Clés</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Support structurel : Les os soutiennent le corps humain, tandis que les récifs coralliens structurent les écosystèmes marins.
          </li>
          <li>
            Réserve de minéraux : Les os stockent du calcium et du phosphore, et les récifs sont faits de carbonate de calcium.
          </li>
          <li>
            Rôle protecteur : Les os protègent les organes vitaux, tandis que les récifs agissent comme boucliers naturels contre les tempêtes.
          </li>
        </ul>
      </Card>

      <Card className="mb-6 p-4 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Enjeux et Solutions</h2>
        <p>
          Tout comme les os peuvent s’affaiblir avec l’âge ou le manque de nutriments, les récifs coralliens sont menacés par la pollution, l'acidification des océans, et le réchauffement climatique. Des initiatives comme la culture de coraux et la réduction des émissions de CO₂ sont essentielles pour préserver ces "os" de l'océan.
        </p>
      </Card>

    </div>
    </div>
  );
};

export default Corail;
