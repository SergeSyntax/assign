import { styled, TextField } from '@mui/material';

export const BoardSectionTitleField = styled(TextField)`
  && {
    .MuiInputBase-input {
      padding: 0.55rem 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      height: inherit;
    }
  }
`;

BoardSectionTitleField.defaultProps = {
  variant: 'outlined',
  size: 'small',
};
