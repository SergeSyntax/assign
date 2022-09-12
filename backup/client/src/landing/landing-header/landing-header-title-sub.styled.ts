import { styled, css } from '@mui/material';
import { moveInRight } from './animation/move-in-right.keyframe';

export const LandingHeaderTitleSub = styled('span')`
  ${({ theme }) => css`
    display: inline-block;
    letter-spacing: 1.05em;
    font-size: 0.45em;
    font-weight: 700;
    animation: ${moveInRight} 1s ease-out;
    margin-left: -0.5rem;

    ${theme.breakpoints.down('lg')} {
      margin-top: 0.5rem;
      font-size: 1.78rem;
      font-weight: 500;
    }

    ${theme.breakpoints.down('md')} {
      font-size: 1.64rem;
    }
  `}
`;
