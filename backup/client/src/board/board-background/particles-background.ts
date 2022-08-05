import { styled } from '@mui/material';
import Particles from 'react-tsparticles';

export const ParticlesBackground = styled(Particles)`
  background: radial-gradient(#89f7fe, #66a6ff) #66a6ff;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  z-index: -1;
`;
