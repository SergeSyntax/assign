import { Alert, IconButton, Snackbar, SnackbarProps } from '@mui/material';
import React, { useContext } from 'react';
import { GoX } from 'react-icons/go';
import { alertClear } from './alert-actions';
import { AlertContext } from './alert-context';
import { AlertState } from './alert.types';
import { UndoButton } from './undo-button.styled';

export const AlertSnackbar: React.FC<AlertState> = ({ error, message, stale }) => {
  const { dispatch } = useContext(AlertContext);

  const commonProps: SnackbarProps = {
    open: !stale,
    onClose: () => dispatch(alertClear()),
    autoHideDuration: error ? 6000 : 1000,
  };

  return error ? (
    <Snackbar {...commonProps}>
      <Alert variant="filled" onClose={() => dispatch(alertClear())} severity="error">
        {message}
      </Alert>
    </Snackbar>
  ) : (
    <Snackbar
      {...commonProps}
      message={message}
      action={
        <React.Fragment>
          <UndoButton color="error" size="small" onClick={() => dispatch(alertClear())}>
            UNDO
          </UndoButton>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => dispatch(alertClear())}
          >
            <GoX />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};
