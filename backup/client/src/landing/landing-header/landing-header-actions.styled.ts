import { styled, css } from '@mui/material';

export const LandingHeaderActions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;
