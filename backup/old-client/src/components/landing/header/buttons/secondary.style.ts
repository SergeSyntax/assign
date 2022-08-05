import { styled } from '@mui/material';
import { moveInBottom } from '../animations/move-in-bottom.keyframe';
import { DefaultButtonHeaderLanding } from './default.style';

export const SecondaryButtonsHeaderLanding = styled(DefaultButtonHeaderLanding)`
  && {
    animation: ${moveInBottom} 1s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: backwards;
    color: #e0e0e0;
    border-color: #e0e0e080;
    &:hover {
      background: #e0e0e0;
      color: #000;
    }
  }
`;
