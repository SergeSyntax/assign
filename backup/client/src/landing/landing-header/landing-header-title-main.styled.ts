import { styled } from '@mui/material';
import { moveInLeft } from './animation/move-in-left.keyframe';

export const LandingHeaderTitleMain = styled('span')`
  display: inline-block;
  animation: ${moveInLeft} 1s ease-out;
`;
