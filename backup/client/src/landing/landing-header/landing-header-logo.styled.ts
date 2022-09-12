import { styled, css } from '@mui/material';
import { Logo } from '../../common/logo';
import { moveInLeft } from './animation/move-in-left.keyframe';

export const LandingHeaderLogo = styled(Logo)`
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
