import { Dispatch } from 'react';

export interface StateAlert {
  stale: boolean;
  error: boolean;
  message: string;
}

export enum ActionTypeAlert {
  ALERT_DISPLAY = 'alert/display',
  ALERT_DISPLAY_FAILURE = 'alert/display_failure',
  ALERT_CLEAR = 'alert/clear'
}

export interface AlertDisplayFailureAction {
  type: ActionTypeAlert.ALERT_DISPLAY_FAILURE;
  payload: string;
}

export interface AlertDisplayAction {
  type: ActionTypeAlert.ALERT_DISPLAY;
  payload: string;
}

export interface AlertClearAction {
  type: ActionTypeAlert.ALERT_CLEAR;
}

export interface AlertContextProps {
  state: StateAlert;
  dispatch: Dispatch<AlertAction>;
}

export type AlertAction = AlertDisplayFailureAction | AlertDisplayAction | AlertClearAction;
