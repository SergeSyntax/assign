import React, { Dispatch, useContext, useEffect, useReducer } from 'react';
import { Action, AlertActionType, AlertDisplayPayload, AlertState } from './alert.type';

const ALERT_TIMEOUT = 4000;

export const alertInitialState: AlertState = [];

export const alertReducer = (state: AlertState = alertInitialState, action: Action): AlertState => {
  switch (action.type) {
    case AlertActionType.ALERT_DISPLAY:
      return [action.payload, ...state];
    case AlertActionType.ALERT_STALE:
      const [_currentAlert, ...rest] = state;
      return [...rest];
    case AlertActionType.ALERT_CLEAR:
      return [];
    //   return { ...state, stale: true, error: false, message: BLANK_MESSAGE };
    default:
      return state;
  }
};

const bindActionCreators = (dispatch: Dispatch<Action>) => {
  return {
    display: (payload: AlertDisplayPayload) => dispatch({ type: AlertActionType.ALERT_DISPLAY, payload }),
    stale: () => dispatch({ type: AlertActionType.ALERT_STALE }),
    clear: () => dispatch({ type: AlertActionType.ALERT_CLEAR }),
  };
};

export const useAlertConsume = () => {
  const [state, dispatch] = useReducer(alertReducer, alertInitialState);
  const actions = bindActionCreators(dispatch);
  const [currentAlert] = state;

  useEffect(() => {
    if (!currentAlert) return;
    const timer = setTimeout(() => {
      actions.stale();
    }, ALERT_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [actions, currentAlert]);

  return { currentAlert, actions, state };
};

/**
 * Creates a Context object. When React renders a component
 * that subscribes to this Context object it will read the
 * current context value from the closest matching Provider
 * above it in the tree.
 */
export const AlertContext = React.createContext<{ state: AlertState; actions: ReturnType<typeof bindActionCreators> }>({
  state: alertInitialState,
  actions: bindActionCreators(() => {}),
});

/**
 * Context object accepts a displayName string property.
 * React DevTools uses this string to determine what to
 * display for the context.
 * @link https://github.com/facebook/react/tree/main/packages/react-devtools-extensions
 * @link https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
 */
AlertContext.displayName = 'AlertContext';

export const useAlertProduce = () => useContext(AlertContext).actions;
