import { ButtonProps } from '@mui/material';
import React from 'react';
import { ContainedButton, ProgressCircular } from './button.styled';

interface SubmitButtonProps extends ButtonProps {
  inProgress: boolean;
  text?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ inProgress, text, ...rest }) => {
  return (
    <ContainedButton type="submit" disabled={inProgress} {...rest}>
      {inProgress ? <ProgressCircular size="2.4rem" /> : text}
    </ContainedButton>
  );
};

SubmitButton.defaultProps = {
  text: 'Submit',
};
