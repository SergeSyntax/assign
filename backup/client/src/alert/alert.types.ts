import { Dispatch } from 'react';

export interface AlertState {
  stale: boolean;
  error: boolean;
  message: string;
}

export enum AlertActionType {
  ALERT_DISPLAY = 'alert/display',
  ALERT_DISPLAY_FAILURE = 'alert/display_failure',
  ALERT_CLEAR = 'alert/clear',
}

export interface AlertDisplayFailureAction {
  type: AlertActionType.ALERT_DISPLAY_FAILURE;
  payload: string;
}

export interface AlertDisplayAction {
  type: AlertActionType.ALERT_DISPLAY;
  payload: string;
}

export interface AlertClearAction {
  type: AlertActionType.ALERT_CLEAR;
}

export type AlertAction = AlertDisplayFailureAction | AlertDisplayAction | AlertClearAction;

export interface AlertContextProps {
  state: AlertState;
  dispatch: Dispatch<AlertAction>;
}
