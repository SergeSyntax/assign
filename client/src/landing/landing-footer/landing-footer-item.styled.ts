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

export const LandingFooterItemLink = styled('a')`
  &:link,
  &:visited {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: 700;
    display: inline-block;
    transition: all 0.1s;
  }
  &:hover,
  &:active,
  &:focus {
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
