import { AlertProps } from '@mui/material';

export interface AlertDisplayPayload {
  message: string;
  severity: AlertProps['severity'];
}

export type AlertState = AlertDisplayPayload[];

/**
 * The defaultValue argument is only used when a component does not have a matching Provider above it in
 * the tree. This default value can be helpful for testing components in isolation without wrapping them.
 *
 * Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
 */
export enum AlertActionType {
  ALERT_DISPLAY = 'alert/display',
  ALERT_STALE = 'alert/stale',
  ALERT_CLEAR = 'alert/clear',
}

export type AlertDisplayAction = {
  type: AlertActionType.ALERT_DISPLAY;
  payload: AlertDisplayPayload;
};

export type AlertStaleAction = {
  type: AlertActionType.ALERT_STALE;
};

export type AlertClearAction = {
  type: AlertActionType.ALERT_CLEAR;
};

export type Action = AlertDisplayAction | AlertStaleAction | AlertClearAction;
