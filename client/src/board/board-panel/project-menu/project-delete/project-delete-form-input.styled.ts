import { styled, TextField } from '@mui/material';

export const ProjectDeleteFormInput = styled(TextField)`
  .MuiFormHelperText-root {
    display: none;
  }
`;

ProjectDeleteFormInput.defaultProps = { fullWidth: true, size: 'small' };
