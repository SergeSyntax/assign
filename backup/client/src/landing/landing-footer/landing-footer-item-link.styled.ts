import { styled } from '@mui/material';

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
