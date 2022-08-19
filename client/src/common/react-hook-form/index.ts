import { Control, ControllerFieldState } from 'react-hook-form';

export const getErrorProps = ({ error, isDirty }: ControllerFieldState) => ({
  error: Boolean(error) && isDirty,
  helperText: (isDirty && error?.message) || ' ',
});

export interface ControllerProps {
  control: Control<any, any>;
  defaultValue: string;
}

export const formCommonProps: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> = {
  noValidate: true,
  autoComplete: 'off',
};
