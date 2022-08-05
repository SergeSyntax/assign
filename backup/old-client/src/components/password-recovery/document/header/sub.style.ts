import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const SubHeaderPasswordRecovery = styled('div')`
  && {
    display: flex;
    flex-direction: column;
    color: #718096;
    margin: 1rem 0rem;
    font-size: 1.6rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('xs')} {
        max-width: 20rem;
      }
    `}
  }
`;
