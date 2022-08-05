import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { AlertContext, useAlertConsume } from './alert.hook';

interface AlertProviderProps {
  children: React.ReactElement;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const { currentAlert, actions, state } = useAlertConsume();
  return (
    <AlertContext.Provider value={{ state, actions }}>
      {children}
      <Snackbar open={Boolean(currentAlert)} onClose={actions.stale}>
        <Alert onClose={actions.stale} severity={currentAlert?.severity} variant="filled">
          {currentAlert?.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
