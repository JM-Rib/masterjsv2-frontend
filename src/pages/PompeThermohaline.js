import React, { useState } from 'react';
import Captcha from '../components/Captcha';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function PompeThermohaline() {
    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState(false);

    const startThermohalinePump = () => {
        setStart(true);
        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 500); // Simulating the thermohaline pump movement over time
    };

    return (
        <div className="bg-gray-100 w-full">
        <div className="py-8 px-6 mx-auto max-w-4xl ">
          <Card className="mb-6 p-4 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">
              Le Cœur Humain et la Pompe Thermohaline de l’Océan
            </h1>
            <p className="text-lg mb-6">
              L’océan couvre 71% de la surface terrestre et joue un rôle crucial dans la régulation du climat. La pompe thermohaline, un système complexe de circulation des eaux, régule le climat en redistribuant chaleur et nutriments autour du globe. Ce mécanisme vital fonctionne à l’échelle mondiale, en bouclant des courants marins qui affectent la température, la salinité et la vie marine.
            </p>
          </Card>
    
          <Card className="mb-6 p-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Le Cœur : Une Pompe Essentielle</h2>
            <p className="mb-4">
              Le cœur humain pompe environ 70 mL de sang à chaque battement, assurant la circulation d’oxygène et de nutriments vers les cellules. À chaque minute, il bat environ 70 fois pour fournir 5 à 6 litres de sang dans tout le corps. Un mécanisme essentiel pour la vie.
            </p>
          </Card>
    
          <Card className="mb-6 p-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">La Pompe Thermohaline : Rôle Global</h2>
            <p className="mb-4">
              La circulation thermohaline déplace environ 100 millions de m³ d'eau chaque seconde, influençant la température de la Terre et la biodiversité marine. Ce système agit comme un transporteur de chaleur, régulant les climats en redistribuant les eaux chaudes de l'équateur vers les pôles et les eaux froides des pôles vers l'équateur.
            </p>
          </Card>
    
          <Card className="mb-6 p-4 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Similitudes Clés</h2>
            <p className="mb-4">
              Tout comme un cœur humain régule la circulation sanguine, la pompe thermohaline régule les courants océaniques. Un ralentissement de cette circulation pourrait perturber le climat mondial. Par exemple, un changement de température de 1 à 2°C peut ralentir cette pompe et perturber les conditions météorologiques mondiales.
            </p>
          </Card>
    
        </div>
        </div>
    );
}

export default PompeThermohaline;
