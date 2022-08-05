import { Button, styled } from '@mui/material';

export const SectionCreateButton = styled(Button)`
  && {
    background: hsla(0, 0%, 100%, 0.14);
    color: #fff;
  }
`;

SectionCreateButton.defaultProps = {
  variant: 'contained',
  fullWidth: true,
};
