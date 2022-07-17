import { ControllerFieldState } from 'react-hook-form';

export const getErrorProps = ({ error, isDirty, isTouched }: ControllerFieldState) => {
  const isError = isDirty && isTouched && error;

  return {
    error: isError,
    helperText: isError ? error?.message ?? ' ' : ' ',
  };
};
