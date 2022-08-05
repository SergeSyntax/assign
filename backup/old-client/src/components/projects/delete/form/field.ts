import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const FieldFormDeleteProject = styled(TextField)`
  .MuiFormHelperText-root {
    display: none;
  }
`;

FieldFormDeleteProject.defaultProps = { fullWidth: true };
