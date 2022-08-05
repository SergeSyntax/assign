import {
  ActionTypeAlert,
  AlertClearAction,
  AlertDisplayAction,
  AlertDisplayFailureAction
} from './types';

export const alertDisplayFailure = (payload: string): AlertDisplayFailureAction => ({
  type: ActionTypeAlert.ALERT_DISPLAY_FAILURE,
  payload
});

export const alertDisplay = (payload: string): AlertDisplayAction => ({
  type: ActionTypeAlert.ALERT_DISPLAY,
  payload
});

export const alertClear = (): AlertClearAction => ({
  type: ActionTypeAlert.ALERT_CLEAR
});

export const alertDisplayFailureNetwork = (
  status: number,
  message: string
): AlertDisplayFailureAction => {
  if (status < 500) return alertDisplayFailure(message);
  return alertDisplayFailure('internal server error');
};
