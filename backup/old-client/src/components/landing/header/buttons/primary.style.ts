import { css } from '@emotion/react';
import { styled } from '@mui/material';
import { moveInBottom } from '../animations/move-in-bottom.keyframe';
import { DefaultButtonHeaderLanding } from './default.style';

export const PrimaryButtonsHeaderLanding = styled(DefaultButtonHeaderLanding)`
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
