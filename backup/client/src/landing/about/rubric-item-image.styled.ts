import { styled, css } from '@mui/material';

export const RubricItemImage = styled('img')`
  ${({ theme }) => css`
    display: none;
    width: 100%;
    max-width: 50rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.down('md')} {
      display: block;
      max-width: 30rem;
    }
  `}
`;
