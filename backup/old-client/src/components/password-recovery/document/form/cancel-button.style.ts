import { Button, styled } from '@mui/material';
import { css } from '@emotion/react';

export const CancelButtonPasswordRecovery = styled(Button)`
  && {
    margin-right: 1rem;

    padding: 1rem 4rem;
    color: #318bd3;
    border-color: #318bd3;

    ${({ theme }) => css`
      ${theme.breakpoints.down('sm')} {
        margin-right: unset;
        flex: 1;
        padding: 2rem;
        margin-bottom: 2rem;
      }
    `}
  }
`;
