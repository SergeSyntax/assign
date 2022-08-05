import React from 'react';
import { AlertInitialState } from './alert-initial-state';
import { AlertContextProps } from './alert.types';

/**
 * Creates a Context object. When React renders a component
 * that subscribes to this Context object it will read the
 * current context value from the closest matching Provider
 * above it in the tree.
 */
export const AlertContext = React.createContext({
  state: AlertInitialState,
  dispatch: () => {},
} as AlertContextProps);

/**
 * Context object accepts a displayName string property.
 * React DevTools uses this string to determine what to
 * display for the context.
 * @link https://github.com/facebook/react/tree/main/packages/react-devtools-extensions
 * @link https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
 */
AlertContext.displayName = 'AlertContext';
