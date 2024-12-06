import React, { useRef, useEffect, useState } from "react";
import { InstancedMesh, Mesh, Vector3, Object3D } from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import { useModelInstance } from '../provider/ModelInstanceProvider.tsx';

interface ModelsProps {
    position?: Vector3; 
    modelPath: string;
}

function HoverObject({ meshRef, cachedModel, rotation, position }) {
    useFrame(() => {
        if (meshRef.current) {
            const dummy = new Object3D();
            dummy.scale.set(1, 1, 1); 
            dummy.position.set(position.x, position.y, position.z);
            dummy.rotation.set(rotation.y, rotation.x, 0); // Apply rotation
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(0, dummy.matrix); // Update the instance
            meshRef.current.instanceMatrix.needsUpdate = true; // Notify for update
        }
    });

    return (
        <instancedMesh
            ref={meshRef}
            args={[
                cachedModel?.geometry, // Use the cached geometry
                cachedModel?.material instanceof Array
                    ? cachedModel.material[0]
                    : cachedModel?.material,
                1, 
            ]}
        />
    );
}
  
const Models: React.FC<ModelsProps> = ({ position = new Vector3(0, 0, 0), modelPath }) => {
    const { addModel, getModel } = useModelInstance();
    const [modelLoaded, setModelLoaded] = useState<boolean>(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 }); // rotation souris 
    const [hover, setHover] = useState(false); 

    const meshRef = useRef<InstancedMesh>(null);
    const loadedModel = useLoader(GLTFLoader, modelPath);
    const cachedModel = getModel(modelPath);

    // charge ou récupère le modele
    useEffect(() => {
        if (loadedModel && !cachedModel) {
            const mesh = loadedModel.scene.children[0] as Mesh;
            addModel(modelPath, mesh);
            setModelLoaded(true);
        } else if (cachedModel) {
            setModelLoaded(true);
        }
    }, [loadedModel, modelPath, addModel, cachedModel]);

    // change la rotation 
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { offsetX, offsetY, target } = event.nativeEvent;
        const width = (target as HTMLElement).clientWidth;
        const height = (target as HTMLElement).clientHeight;

        // mettre x et y entre -1 et 1
        const x = (offsetX / width) * 2 - 1;
        const y = -(offsetY / height) * 2 + 1; 

        // limite la rotation pour effet subtil
        setRotation({ x: x * Math.PI * 0.1, y: y * Math.PI * 0.1 });
    };

    const handleMouseEnter = () => setHover(true);

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 }); // RAZ de la rotation
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'inline-block',
                verticalAlign: 'middle',
                width: '6rem',
                height: '6rem',
                marginRight: '0.2em',
            }}
        >
            <Canvas shadows camera={{ position: [0, 0, 2], fov: 65, zoom: 1 }}>
                <pointLight position={[1, 1, 2]} intensity={8} castShadow />
                {modelLoaded && cachedModel && (
                    <HoverObject
                        meshRef={meshRef}
                        cachedModel={cachedModel}
                        rotation={hover ? rotation : { x: 0, y: 0 }}
                        position={position}
                    />
                )}
            </Canvas>
        </div>
    );
};

export default Models;
