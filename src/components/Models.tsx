import React, { useRef, useEffect, useState } from "react";
import { InstancedMesh, Object3D, BoxGeometry, MeshStandardMaterial, Mesh, Vector3 } from "three";
import { } from "@react-three/fiber"; // prevents annoying typescript error
import { useLoader } from "@react-three/fiber"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import { OBJECTS } from "../utils/constants";
import { useModelInstance } from '../provider/ModelInstanceProvider.tsx';

interface ModelsProps {
    position?: Vector3; // Accept position as a prop of type Vector3
    modelPath: string;
}
  
const Models: React.FC<ModelsProps> = ({ position = new Vector3(0,0,0),  modelPath }) => {
    const { addModel, models } = useModelInstance(); 
    // const model = models.current.get(modelPath)?.instance;

    const [modelLoaded, setModelLoaded] = useState<boolean>(false);
    const [model, setModel] = useState<Mesh | null>(null); 

    const loadedModel = useLoader(GLTFLoader, modelPath);
    // const mesh = loadedModel.scene.children[0] as Mesh;
  
    useEffect(() => {
        if (loadedModel && !models.current.has(modelPath)) {
            setModel(loadedModel.scene.children[0] as Mesh);
            addModel(modelPath, loadedModel.scene.children[0] as Mesh);
            setModelLoaded(true); 
        }
    }, [loadedModel, modelPath, addModel, models]);
        
    const instanceCount = 4;

    const meshRef = useRef<InstancedMesh>(null);

    useEffect(() => {
        if (meshRef.current !== null && model ) {
            const dummy = new Object3D();
            let instanceIndex = 0;

            dummy.scale.set(0.2, 0.2, 0.2);
            dummy.position.set(position.x, position.y, position.z);
            dummy.updateMatrix();
            meshRef.current?.setMatrixAt(instanceIndex, dummy.matrix);

            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    }, [position, model]);

    if (!model) {
        return null;
    }

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
                        instanceCount, 
                    ]}
                />
        }
        </>
    );
};

export default Models;
