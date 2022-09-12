import { ControllerFieldState } from 'react-hook-form';

export const getErrorProps = ({ invalid, error, isDirty }: ControllerFieldState) => {
  const isError = isDirty && invalid;

  return {
    error: isError,
    helperText: isError ? error?.message ?? ' ' : ' ',
  };
};
