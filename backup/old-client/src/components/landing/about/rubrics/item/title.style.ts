import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const TitleRubricItem = styled('h3')`
  ${({ theme }) => css`
    font-size: 2.1rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;

    ${theme.breakpoints.down('md')} {
      font-size: 1.7rem;
    }
  `}
`;
