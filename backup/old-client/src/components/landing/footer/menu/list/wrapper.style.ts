import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const WrapperMenuListFooter = styled('ul')`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    ${theme.breakpoints.down('md')} {
      margin-top: 3rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;
