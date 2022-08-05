import { styled } from '@mui/material';

export const TaskFieldForm = styled('form')`
  display: flex;
  flex-direction: column;
`;

TaskFieldForm.defaultProps = {
  autoComplete: 'off',
  noValidate: true,
};
