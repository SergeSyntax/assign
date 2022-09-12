import React, { useReducer } from 'react';
import { AlertContext } from './alert-context';
import { AlertInitialState } from './alert-initial-state';
import { alertReducer } from './alert-reducer';
import { AlertSnackbar } from './alert-snackbar';

/**
 * Every Context object comes with a Provider React component that allows consuming components
 * to subscribe to context changes. The Provider component accepts a value prop to be passed to
 * consuming components that are descendants of this Provider. One Provider can be connected to
 * many consumers. Providers can be nested to override values deeper within the tree.
 * @returns provider warper for the alert Context.
 */
export const AlertContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, AlertInitialState);
  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
      <AlertSnackbar {...state} />
    </AlertContext.Provider>
  );
};
