import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const ImageAbout = styled('img')`
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
