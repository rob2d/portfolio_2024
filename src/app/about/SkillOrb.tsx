import { Float, Text } from '@react-three/drei';
import { SkillPoint } from './SkillOrbs';
import { useMemo } from 'react';

export default function SkillOrb({
  skillPoint,
  radianAngle
}: {
  skillPoint: SkillPoint;
  radianAngle: number;
}) {
  const position: [number, number, number] = useMemo(
    () => [
      Math.cos(radianAngle) * 1 /* xWidth?*/,
      Math.sin(radianAngle) * 1 /* yWidth? */,
      0
    ],
    [radianAngle]
  );
  return (
    <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]}>
      <Text
        scale={0.01 + skillPoint.value / 3}
        position={position}
        color={'#F00'}
      >
        {skillPoint.label}
      </Text>
    </Float>
  );
}
