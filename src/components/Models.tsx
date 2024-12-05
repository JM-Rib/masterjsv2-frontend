import React, { useRef, useEffect } from "react";
import { InstancedMesh, Object3D, BoxGeometry, MeshStandardMaterial } from "three";
import { } from "@react-three/fiber"; // prevents annoying typescript error
import { OBJECTS } from "../utils/constants";

const Models: React.FC<{ }> = () => {
    const instanceCount = 4;
    const position = {
        x: 0,
        y: 0,
        z: 0
    }
    const meshRef = useRef<InstancedMesh>(null);

    // gamegrid => position info

    useEffect(() => {
        if (meshRef.current !== null ) {
            const dummy = new Object3D();
            let instanceIndex = 0;

            dummy.scale.set(0.2, 0.2, 0.2);
            dummy.position.set(position.x, position.y, position.z);
            dummy.updateMatrix();
            meshRef.current?.setMatrixAt(instanceIndex, dummy.matrix);

            instanceIndex++;

            meshRef.current.instanceMatrix.needsUpdate = true;
            if( meshRef.current?.instanceColor !== null){
              meshRef.current.instanceColor.needsUpdate = true;  // update colors
            }  
        }
    }, [position]);

    return (
        <instancedMesh
            ref={meshRef}
            args={[
                new BoxGeometry(1, 1, 1),  // Cube geometry
                new MeshStandardMaterial({ color: "transparent" }), // Default material
                instanceCount, // Number of instances
            ]}
        />
    );
};

export default Models;
