import { css } from '@emotion/react';
import { styled } from '@mui/material';
import { Logo } from 'src/components/common/layout/logo';
import { moveInLeft } from './animations/move-in-left.keyframe';

export const LogoHeaderLanding = styled(Logo)`
  ${({ theme }) => css`
    & {
      animation: ${moveInLeft} 1s ease-out;
      align-self: flex-start;
      margin: 3rem;

      ${theme.breakpoints.down('sm')} {
        margin-top: 5rem;
        font-size: 5rem;
        align-self: center;
      }
    }
  `}
`;
