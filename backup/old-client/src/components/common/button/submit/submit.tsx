import React from 'react';
import { ButtonProps } from '@mui/material';
import { MaterialButton } from './material-button';
import { ProgressCircular } from './progress-circular';

interface Props extends ButtonProps {
  inProgress: boolean;
  text?: string;
}

export const SubmitButton: React.FC<Props> = ({ text = 'Submit', inProgress, ...rest }) => {
  return (
    <MaterialButton
      variant="contained"
      color="primary"
      type="submit"
      disabled={inProgress}
      {...rest}
    >
      {inProgress ? <ProgressCircular size="2.4rem" /> : text}
    </MaterialButton>
  );
};
