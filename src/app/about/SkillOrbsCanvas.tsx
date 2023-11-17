import { Canvas } from '@react-three/fiber';
import SkillOrbs from './SkillOrbs';
import { styled } from '@mui/material';

const ThemedCanvas = styled(Canvas)(
  () => `
& {
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 100%;
}`
);

export default function SkillOrbsCanvas() {
  return (
    <ThemedCanvas className='canvas'>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <SkillOrbs />
    </ThemedCanvas>
  );
}
