import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const WrapperItemFooterMenu = styled('li')`
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
