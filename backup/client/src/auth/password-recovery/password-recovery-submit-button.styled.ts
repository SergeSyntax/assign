import { Button, styled, css } from '@mui/material';

export const PasswordRecoverySubmitButton = styled(Button)`
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

PasswordRecoverySubmitButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  type: 'submit',
};
