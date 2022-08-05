import { css } from '@emotion/react';
import { Button, styled } from '@mui/material';

export const ApproveButtonPasswordRecovery = styled(Button)`
  && {
    flex: 1;
    background: #318bd3;
    padding: 1rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('sm')} {
        flex: 1;
        padding: 2rem;
      }
    `}
  }
`;
