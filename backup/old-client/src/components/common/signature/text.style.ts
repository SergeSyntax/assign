import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const TextSignature = styled('p')`
  ${({ theme }) => css`
    color: #cfcfcf;
    font-weight: 900;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.07rem;
    word-spacing: 0.5rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.2rem;
    }
  `}
`;
