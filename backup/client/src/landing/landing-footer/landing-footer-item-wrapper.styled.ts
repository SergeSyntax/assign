import { styled, css } from '@mui/material';

export const LandingFooterItemWrapper = styled('li')`
  ${({ theme }) => css`
    &:not(:last-child) {
      margin-right: 5rem;
    }

    ${theme.breakpoints.down('md')} {
      &:not(:last-child) {
        margin: 1rem;
      }
      margin: 1rem;
    }
  `}
`;
