import { Button, styled } from '@mui/material';

export const TextButton = styled(Button)`
  min-height: 4.5rem;
  min-width: 9rem;
  margin: 1rem 0;
  padding: 0;

  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 600;

  transition: all 0.2s;
  color: #0073b1;
`;

TextButton.defaultProps = {
  color: 'inherit',
  variant: 'text',
};
