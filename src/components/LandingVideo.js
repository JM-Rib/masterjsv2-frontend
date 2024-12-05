import React from 'react';
import { MathUtils, Vector3 as ThreeVector3, Object3D } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Grid, useDrag } from '../utils/Grid'; 
import { OrbitControls } from '@react-three/drei';
import { BALLS } from '../utils/constants';
import { OBJECTS } from '../utils/constants';
import { useGLTF } from "@react-three/drei";

import Models from './Models.tsx';

function LandingWheel(props) {
  
	return (
        <div className="w-24 h-24 bg-blue-200 rounded-full">
            <Canvas shadows camera={{ position: [0, 3, 9], fov:65 }} style={{height: "250px"}}>
                <pointLight decay={0} intensity={3} position={[4, 4, 3]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
                <Models></Models>
            </Canvas>
        </div>
    );
}

export default LandingWheel;