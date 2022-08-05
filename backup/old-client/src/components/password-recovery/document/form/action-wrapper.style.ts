import { css } from '@emotion/react';
import { styled } from '@mui/material';

const ActionWrapperFormPasswordRecovery = styled('div')`
  && {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 1rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('sm')} {
        flex-direction: column;
        align-items: stretch;
        margin: 1rem auto;
      }
    `}
  }
`;

export default ActionWrapperFormPasswordRecovery;
