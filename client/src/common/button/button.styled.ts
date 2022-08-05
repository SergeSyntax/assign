import { Button, styled, css, CircularProgress } from '@mui/material';

export const ProgressCircular = styled(CircularProgress)`
  color: white;
`;

export const ContainedButton = styled(Button)`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 4.5rem;
    min-width: 9rem;
    margin: 1rem 0;
    padding: 0;

    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 600;

    transition: all 0.2s;
    background: #0073b1;
    color: #fff;

    &:hover {
      box-shadow: ${theme.shadows[5]};
      background: #0073b1;
    }

    &:disabled {
      background: #0073b1;
    }
  `}
`;

ContainedButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};
