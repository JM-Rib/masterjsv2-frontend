import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Information(props) {
  
    return (
        <div className="bg-gray-100 w-full h-screen">
        <div className="py-8 px-6 mx-auto max-w-4xl">
          <Card className="mb-6 p-4 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">
                MasterJS
            </h1>
            <p className="text-lg mb-6">
                Site réalisé par Jean-Marin Ribaric & Bastien Talec dans le cadre de la nuit de l'info
            </p>
            <br />
            <br />
            <br />

            <div className="text-center">
                        <Button
                            label="Emojis 3D par 3moji.org"
                            icon="pi pi-external-link"
                            className="p-button-outlined p-button-lg"
                            onClick={() => window.open('https://3moji.org/index.html', '_blank')}
                        />
            </div>
          </Card>
    
   
          </div>
        </div>
      ); 
}

export default Information;