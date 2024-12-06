import React, { useCallback, useEffect } from 'react';
import { MathUtils, Vector3 as ThreeVector3, Object3D } from 'three';
import {  useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Grid, useDrag } from '../utils/Grid'; 
import { OrbitControls } from '@react-three/drei';
import { BALLS } from '../utils/constants';
import { OBJECTS } from '../utils/constants';
import { useGLTF } from "@react-three/drei";

interface CubeProps {
  position?: [number, number, number];
  scale?: number;
}

function Cube({ position = [0.5, 0.5, -0.5], scale = 1, ...props }: CubeProps) {
  const ref = useRef<Object3D>(null);
  const pos = useRef(new ThreeVector3(...position));
  const { scene } = useGLTF(BALLS.FOOTBALL); // chargement modele.

  const onDrag = useCallback(
    ({ x, z }: { x: number; z: number }) => {
      pos.current.set(
        Math.round(MathUtils.clamp(x, -5, 4)) + 0.5,
        position[1], // ne maj pas l'axe des y
        Math.round(MathUtils.clamp(z, -5, 4)) + 0.5
      );
    },
    [position]
  );

  const [events, active, hovered] = useDrag(onDrag);

  useEffect(() => { // nécessaire pour rajouter des ombres au modele.
    scene.children.forEach((mesh, i) => {
      mesh.castShadow = true;
    })
  });

  useEffect(() => {
    document.body.style.cursor = active ? 'grabbing' : hovered ? 'grab' : 'auto';
  }, [active, hovered]);

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.position, pos.current, 0.1, delta);
      // TODO : mettre un effet visuel ICI pour différencier quel modele est selectionné
    }
  });

  return (
    <primitive 
      castShadow
      object={scene}
      position={position}
      ref={ref}
      scale={scale}
      {...events}
      {...props}
    ></primitive>

  );
}

function Goal({ position = [0.5, 0.5, 0.5], scale = 1 }: CubeProps) {
  const ref = useRef<Object3D>(null);
  const { scene } = useGLTF(OBJECTS.GOAL); // chargement modele.

  useEffect(() => { // nécessaire pour rajouter des ombres au modele.
    scene.children.forEach((mesh, i) => {
      mesh.castShadow = true;
    })
  });

  return (
    <primitive 
      castShadow
      object={scene}
      position={position}
      ref={ref}
      scale={scale}
      rotation-y={Math.PI/4}
    ></primitive>

  );
}

export default function DraggableModels() {
  return (
    <Canvas shadows camera={{ position: [0, 3, 9], fov:65 }} style={{height: "250px"}}>
      <ambientLight intensity={3} castShadow />
      <pointLight decay={0} intensity={2} position={[10, 10, -5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Grid scale={10}>
        <Cube position={[-1.5, BALLS.Scale, 4.5]} scale={BALLS.Scale} />
      </Grid> 
      <Goal position={[0, 1.2, -4]} scale={2} />
      <OrbitControls target={[0, 2.3, 0]} enablePan={false} enableRotate={false} enableZoom={false} />
    </Canvas>
  );
}
