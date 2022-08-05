import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const WrapperTitleHeaderLanding = styled('h1')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #fff;
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10rem 0;
    font-weight: 300;
    margin-right: -3rem;

    ${theme.breakpoints.down('lg')} {
      font-size: 2.5rem;
      font-weight: 700;
    }

    ${theme.breakpoints.down('md')} {
      font-size: 2rem;
    }

    ${theme.breakpoints.down('sm')} {
      display: none;
    }
  `}
`;
