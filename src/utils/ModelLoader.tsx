import React from 'react';
import { useGLTF } from "@react-three/drei";

const ModelLoader: React.FC<{ modelPath: string, position?: Array<number>, r?: any, s?: any, size?: number, meshRef?, children? }> = ({ modelPath, position=[0,0,0], r=[0,0,0], s=1, meshRef, children }) => {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} position={position} ref={meshRef} rotation={r} scale={s} >{children}</primitive>
};

export default ModelLoader;
