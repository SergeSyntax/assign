import { styled } from '@mui/material';
import { moveInBottom } from './animation/move-in-bottom.keyframe';
import { LandingHeaderButton } from './landing-header-button.styled';

export const LandingHeaderButtonSecondary = styled(LandingHeaderButton)`
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
