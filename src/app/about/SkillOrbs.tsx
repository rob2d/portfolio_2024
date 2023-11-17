'use client';

import { useFrame } from '@react-three/fiber';
import { MutableRefObject, useRef } from 'react';
import { BufferGeometry, DoubleSide, Mesh } from 'three';
import SkillOrb from './SkillOrb';

export type SkillPoint = {
  namespace: string;
  label: string;
  value: number;
};

const skillPoints: SkillPoint[] = [
  {
    namespace: 'frontend',
    label: 'Front end',
    value: 1.0
  },
  {
    namespace: 'devops',
    label: 'Dev-ops',
    value: 0.75
  },
  {
    namespace: 'backend',
    label: 'Backend',
    value: 0.7
  },
  {
    namespace: 'uiUxDesign',
    label: 'UI/UX Design',
    value: 0.55
  },
  {
    namespace: 'architecture',
    label: 'Architecture',
    value: 0.95
  },
  {
    namespace: 'graphics',
    label: 'Graphics',
    value: 0.4
  }
];

export default function SkillOrbs() {
  const meshRef = useRef() as MutableRefObject<Mesh<BufferGeometry>>;

  useFrame((state, delta) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta * 0.25;
  });

  return (
    <>
      <mesh visible position={[0, 0, 0]} ref={meshRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          wireframe
          wireframeLinewidth={2}
          opacity={0.75}
          side={DoubleSide}
          color='#000'
          transparent
          depthWrite
        />
        {skillPoints.map((s, i, a) => (
          <SkillOrb
            skillPoint={s}
            key={s.namespace}
            radianAngle={(i / a.length) * Math.PI * 2.0}
          />
        ))}
      </mesh>
    </>
  );
}
