import { styled } from '@mui/material';
import { DialogTitle as MuiDialogTitle } from '@mui/material';

export const DialogHeaderWrapper = styled(MuiDialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.MuiDialogTitle-root {
    padding-right: 1.2rem;
  }
`;
