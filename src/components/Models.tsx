import React, { useRef, useEffect, useState } from "react";
import { InstancedMesh, Mesh, Vector3, Object3D } from "three";
import { } from "@react-three/fiber"; // prevents annoying typescript error
import { useLoader } from "@react-three/fiber"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import { useModelInstance } from '../provider/ModelInstanceProvider.tsx';

interface ModelsProps {
    position?: Vector3; 
    modelPath: string;
}
  
const Models: React.FC<ModelsProps> = ({ position = new Vector3(0,0,0),  modelPath }) => {
    const { addModel, getModel } = useModelInstance(); 

    const [modelLoaded, setModelLoaded] = useState<boolean>(false);
    const meshRef = useRef<InstancedMesh>(null);
    const loadedModel = useLoader(GLTFLoader, modelPath);
    const cachedModel = getModel(modelPath); 

    useEffect(() => {
        if (loadedModel && !cachedModel) {
            const mesh = loadedModel.scene.children[0] as Mesh;
            addModel(modelPath, mesh);
            setModelLoaded(true);
        } else if (cachedModel) {
            setModelLoaded(true);
        }
    }, [loadedModel, modelPath, addModel, cachedModel]);
    
    useEffect(() => {
        if (meshRef.current && cachedModel) {
          const dummy = new Object3D();
          dummy.scale.set(0.2, 0.2, 0.2);
          dummy.position.set(position.x, position.y, position.z);
          dummy.updateMatrix();
          meshRef.current.setMatrixAt(0, dummy.matrix);
          meshRef.current.instanceMatrix.needsUpdate = true;
        }
      }, [position, cachedModel]); 

    return (
        <>
        {
            !modelLoaded ?
                null
            :
                <instancedMesh
                    ref={meshRef}
                    args={[
                        cachedModel?.geometry, // Use the cached geometry
                        cachedModel?.material instanceof Array ? cachedModel.material[0] : cachedModel?.material,
                        4,
                    ]}
                />
        }
        </>
    );
};

export default Models;
