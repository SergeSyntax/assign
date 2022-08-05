import { styled, TextField } from '@mui/material';

export const TaskRenameTitleField = styled(TextField)`
  && {
    .MuiInputBase-multiline {
      padding: 1rem 2rem;
    }

    .MuiInputBase-input {
      font-size: 2.3rem;
      font-weight: bold;
      height: inherit;
      width: 100%;
      min-height: 3rem;
      padding: 0;
    }
  }
`;

TaskRenameTitleField.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  size: 'medium',
  multiline: true,
};
