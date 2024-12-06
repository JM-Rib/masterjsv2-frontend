import React, { useRef, useState, useEffect} from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import DraggableModels from './DraggableModels.tsx';
import { storeToken, removeToken, getToken } from '../utils/token';

import useApi from '../hooks/useApi';
import captchaApi from '../api/captcha'; 

const Captcha = (props) => {

    const footer = (
        <>
            <Button label="Valider" icon="pi pi-check" />
        </>
    );

    const header = (
        <DraggableModels />
    );
    return (
        <div className="card flex justify-content-center">
            <Card title="Êtes vous un bot?" footer={footer} header={header} className="md:w-[25rem] h-[500px]">
                <p className="m-0">
                    Rendez fier Mbappe ! 
                </p>
            </Card>
        </div>
    )
}

export default Captcha;

