import { styled, TextField } from '@mui/material';

export const SmallTextField = styled(TextField)`
  && {
    .MuiInputBase-input {
      padding-bottom: 1rem;
      padding-top: 1rem;
      font-size: 1.6rem;
    }
  }
`;

SmallTextField.defaultProps = {
  size: 'small',
  fullWidth: true,
  type: 'text',
  multiline: true,
  autoFocus: true,
};
