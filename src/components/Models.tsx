import React, { useRef, useEffect } from "react";
import { InstancedMesh, Object3D, BoxGeometry, MeshStandardMaterial, Mesh } from "three";
import { } from "@react-three/fiber"; // prevents annoying typescript error
import { useLoader } from "@react-three/fiber"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import { OBJECTS } from "../utils/constants";

const Models: React.FC<{ }> = () => {
    const instanceCount = 4;
    const position = {
        x: 0,
        y: 0,
        z: 0
    }
    const meshRef = useRef<InstancedMesh>(null);
    const model = useLoader(GLTFLoader, OBJECTS.BLOOD);
    const mesh = model.scene.children.find(child => child instanceof Mesh) as Mesh | undefined;

    // gamegrid => position info

    useEffect(() => {
        if (meshRef.current !== null && model ) {
            const dummy = new Object3D();
            let instanceIndex = 0;

            dummy.scale.set(0.2, 0.2, 0.2);
            dummy.position.set(position.x, position.y, position.z);
            dummy.updateMatrix();
            meshRef.current?.setMatrixAt(instanceIndex, dummy.matrix);

            instanceIndex++;

            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    }, [position]);

    return (
        <instancedMesh
            ref={meshRef}
            args={[
                mesh?.geometry,
                mesh?.material instanceof Array ? mesh.material[0] : mesh?.material, // Preserve the material from the model
                instanceCount, 
            ]}
        />
    );
};

export default Models;
