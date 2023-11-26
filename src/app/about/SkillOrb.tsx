import { Text, useFont } from '@react-three/drei';
import { SkillPoint } from './SkillOrbs';
import { MutableRefObject, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BufferAttribute, DoubleSide, Mesh, SphereGeometry } from 'three';

const fontUrl = '/fonts/Futura-Bold.json';

export default function SkillOrb({
  skillPoint,
  radianAngle
}: {
  skillPoint: SkillPoint;
  radianAngle: number;
}) {
  const font = useFont.preload(fontUrl);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = useRef() as MutableRefObject<Mesh<any>>;
  const sphereGeoRef = useRef() as MutableRefObject<SphereGeometry>;
  const position: [number, number, number] = useMemo(
    () => [
      Math.cos(radianAngle) * 1 /* xWidth?*/,
      Math.sin(radianAngle) * 1 /* yWidth? */,
      Math.cos(radianAngle) * 1
    ],
    [radianAngle]
  );

  const sphereGeometry = useMemo(() => {
    // Create a sphere geometry
    const geometry = new SphereGeometry(skillPoint.value / 3, 8, 8);
    const positionAttribute = geometry.getAttribute('position');

    // Create a new color attribute
    const colorAttribute = new BufferAttribute(
      new Float32Array(positionAttribute.count * 3),
      3
    );

    // Assign a random color to each vertex
    for (let i = 0; i < colorAttribute.count; i++) {
      colorAttribute.setXYZ(i, Math.random(), Math.random(), Math.random());
    }

    // Add the color attribute to the geometry
    geometry.setAttribute('color', colorAttribute);

    return geometry;
  }, [skillPoint.value]);

  useFrame(({ camera }) => {
    // Make the mesh always face the camera
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }

    if (sphereGeoRef.current) {
    }
  });

  return (
    <>
      <Text
        scale={0.01 + skillPoint.value / 3}
        position={position}
        color={'#000'}
        font={font}
        ref={textRef}
      >
        {skillPoint.label}
      </Text>
      <mesh position={position} geometry={sphereGeometry}>
        <meshBasicMaterial
          opacity={0.75}
          side={DoubleSide}
          transparent
          depthWrite
          vertexColors={true}
        />
      </mesh>
    </>
  );
}
