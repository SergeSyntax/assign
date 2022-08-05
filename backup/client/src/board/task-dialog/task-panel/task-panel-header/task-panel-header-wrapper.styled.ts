import { DialogTitle, styled } from '@mui/material';

export const TaskPanelHeaderWrapper = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 11rem;
  overflow: hidden;
  :first-of-type {
    flex: 1;
  }
`;
