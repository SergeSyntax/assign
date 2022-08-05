import { ControllerFieldState } from 'react-hook-form';

export const getErrorProps = ({ error, isDirty }: ControllerFieldState) => ({
  error: Boolean(error) && isDirty,
  helperText: (isDirty && error?.message) || ' ',
});
