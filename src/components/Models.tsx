import React, { useRef, useEffect, useState } from "react";
import { InstancedMesh, Mesh, Vector3 } from "three";
import { } from "@react-three/fiber"; // prevents annoying typescript error
import { useLoader } from "@react-three/fiber"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import { useModelInstance } from '../provider/ModelInstanceProvider.tsx';

interface ModelsProps {
    position?: Vector3; 
    modelPath: string;
}
  
const Models: React.FC<ModelsProps> = ({ position = new Vector3(0,0,0),  modelPath }) => {
    const { addModel, models } = useModelInstance(); 

    const [modelLoaded, setModelLoaded] = useState<boolean>(false);
    const [model, setModel] = useState<Mesh | null>(null); 

    const loadedModel = useLoader(GLTFLoader, modelPath);
  
    useEffect(() => {
        if (loadedModel && !models.current.has(modelPath)) {
            setModel(loadedModel.scene.children[0] as Mesh);
            addModel(modelPath, loadedModel.scene.children[0] as Mesh);
            setModelLoaded(true); 
        }
    }, [loadedModel, modelPath, addModel, models]);
        
    const meshRef = useRef<InstancedMesh>(null);

    return (
        <>
        {
            !modelLoaded ?
                null
            :
                <instancedMesh
                    ref={meshRef}
                    args={[
                        model?.geometry,
                        model?.material instanceof Array ? model.material[0] : model?.material, 
                        1, 
                    ]}
                />
        }
        </>
    );
};

export default Models;
