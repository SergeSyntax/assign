import { styled, css } from '@mui/material';

export const PasswordRecoveryTitleSub = styled('div')`
  && {
    display: flex;
    flex-direction: column;
    color: #718096;
    margin: 1rem 0rem;
    font-size: 1.6rem;
    ${({ theme }) => css`
      ${theme.breakpoints.down('xs')} {
        max-width: 20rem;
      }
    `}
  }
`;
