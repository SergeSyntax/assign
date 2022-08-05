import { css } from '@emotion/react';
import { Button, styled } from '@mui/material';

export const DefaultButtonHeaderLanding = styled(Button)`
  && {
    ${({ theme }) => css`
      border-radius: 10rem;
      padding: 1rem 4rem;
      border-width: 0.2rem;
      transition: all 0.5s;
      position: relative;
      &:hover {
        transform: translateY(-0.3rem);
      }
      &:active {
        transform: translateY(-0.1rem);
      }

      ${theme.breakpoints.down('sm')} {
        padding: 2rem 4rem;
        font-size: 2rem;
      }
    `}
  }
`;

DefaultButtonHeaderLanding.defaultProps = { color: 'inherit' };
