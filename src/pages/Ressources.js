import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Ressources() {
    return (
        <div className="bg-gray-100 w-full h-screen">
            <div className="py-8 px-6 mx-auto max-w-4xl">
                <Card className="mb-6 p-4 shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Ressources</h1>
                    <p className="text-lg mb-6">
                        Découvrez des fiches scientifiques détaillées sur le lien crucial entre l'océan et le climat.
                    </p>
                    <div className="text-center">
                        <Button
                            label="Explorer les fiches scientifiques"
                            icon="pi pi-external-link"
                            className="p-button-outlined p-button-lg"
                            onClick={() => window.open('https://ocean-climate.org/presentation-des-fiches-scientifiques-ocean-et-climat/', '_blank')}
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Ressources;
