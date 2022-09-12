import { styled, css } from '@mui/material';
import { moveInBottom } from './animation/move-in-bottom.keyframe';
import { LandingHeaderButton } from './landing-header-button.styled';

export const LandingHeaderButtonPrimary = styled(LandingHeaderButton)`
  && {
    ${({ theme }) => css`
      animation: ${moveInBottom} 1s ease-out;
      animation-delay: 0.5s;
      animation-fill-mode: backwards;
      margin-right: 3rem;
      background-color: #e0e0e0;
      color: rgba(0, 0, 0, 0.87);
      ${theme.breakpoints.down('sm')} {
        margin-right: 0;
        margin-bottom: 5rem;
        margin-top: 3rem;
      }
    `}
  }
`;
