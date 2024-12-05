import React, { createContext, ReactNode, useContext, MutableRefObject, useRef } from 'react';
import { Mesh } from 'three';
import { useLoader } from "@react-three/fiber"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 

interface ModelInstance {
    path: string;
    instance: Mesh;
}

interface ModelInstanceContextProps {
    models: MutableRefObject<Map<string, ModelInstance>>; // Store models in a Map
    addModel: (path: string, instance: Mesh) => void; // Method to load a model
}

export const ModelInstanceContext = createContext<ModelInstanceContextProps | undefined>(undefined);

export const useModelInstance = () => {
    const context = useContext(ModelInstanceContext);
    if (!context) {
        throw new Error("useModelInstance must be used within a ModelInstanceProvider");
    }
    return context;
};

interface TypeEnfant {
    children: ReactNode;
}

export const ModelInstanceProvider = ({ children }: TypeEnfant ) => {
    const models = useRef(new Map<string, ModelInstance>());

    const addModel = (path: string, instance: Mesh) => {
        models.current.set(path, { path, instance });
    };

    return (
        <ModelInstanceContext.Provider 
            value={{ 
                models, addModel
            }}>
            {children}
        </ModelInstanceContext.Provider>
    );
}