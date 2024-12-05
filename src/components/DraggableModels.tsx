import React, { MutableRefObject } from 'react';
import { MathUtils, Color, BufferGeometry, Mesh, Material, MeshStandardMaterial, Vector3 as ThreeVector3 } from 'three';
import { useCallback, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import { Grid, useDrag } from '../utils/Grid'; 

interface CubeProps {
  position?: [number, number, number];
  scale?: [number, number, number];
}

function Cube({ position = [0.5, 0.5, -0.5], scale = [1, 1, 1], ...props }: CubeProps) {
  const ref: MutableRefObject<Mesh<BufferGeometry, Material | Material[]> | null> = useRef(null); 
  const pos = useRef(new ThreeVector3(...position));
  const c = new Color();

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

  useEffect(() => {
    document.body.style.cursor = active ? 'grabbing' : hovered ? 'grab' : 'auto';
  }, [active, hovered]);

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.position, pos.current, 0.1, delta);
  
      const material = ref.current.material;
      if (material instanceof MeshStandardMaterial) { // empeche bug typescript
        easing.dampC(
          material.color,
          active ? c.set('white') : hovered ? c.set('lightblue') : c.set('orange'),
          0.1,
          delta
        );
      }
    }
  });
  
  return (
    <mesh ref={ref} castShadow receiveShadow {...events} {...props} scale={scale}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function DraggableModels() {
  return (
    <Canvas shadows orthographic camera={{ position: [5, 5, 5], zoom: 25 }}>
      <ambientLight intensity={0.5 * Math.PI} />
      <pointLight decay={0} position={[10, 10, -5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Grid scale={10}>
        <Cube position={[0.5, 1, -0.5]} scale={[1, 2, 1]} />
        <Cube position={[2.5, 0.5, 1.5]} />
        <Cube position={[-1.5, 1.5, 2.5]} scale={[1, 3, 1]} />
      </Grid>
      <OrbitControls makeDefault enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  );
}
