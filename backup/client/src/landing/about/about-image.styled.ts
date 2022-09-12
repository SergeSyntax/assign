import { styled, css } from '@mui/material';

export const AboutImage = styled('img')`
  ${({ theme }) => css`
    flex: 1;
    max-width: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `}
`;
