import { css } from '@emotion/react';
import { styled } from '@mui/material';

export const WrapperButtonsHeaderLanding = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    ${theme.breakpoints.down('sm')} {
      flex-direction: column;
    }
  `}
`;
