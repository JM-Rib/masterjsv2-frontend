import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import DraggableModels from './DraggableModels.tsx';

const Captcha = (props) => {
  
    const header = (
        <DraggableModels />
    );

    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Êtes vous un bot?" footer={footer} header={header} className="md:w-[25rem] h-[500px]">
                <p className="m-0">
                    Mbappe
                </p>
            </Card>
        </div>
    )
}

export default Captcha;

