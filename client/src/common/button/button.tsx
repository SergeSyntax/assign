import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from '@mui/material';
import { ContainedButton, ProgressCircular } from './button.styled';

export interface SubmitButtonProps extends ButtonProps {
  inProgress: boolean;
  text?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ inProgress, text, disabled, className, ...rest }) => {
  return (
    <ContainedButton
      className={clsx({ loading: inProgress }, className)}
      type="submit"
      disabled={inProgress || disabled}
      {...rest}
    >
      {inProgress ? <ProgressCircular role="progressbar" size="2.4rem" /> : text}
    </ContainedButton>
  );
};

SubmitButton.defaultProps = {
  text: 'Submit',
};
