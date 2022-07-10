import {
  AlertActionType,
  AlertClearAction,
  AlertDisplayAction,
  AlertDisplayFailureAction,
} from './alert.types';

export const alertDisplayFailure = (payload: string): AlertDisplayFailureAction => ({
  type: AlertActionType.ALERT_DISPLAY_FAILURE,
  payload,
});

export const alertDisplay = (payload: string): AlertDisplayAction => ({
  type: AlertActionType.ALERT_DISPLAY,
  payload,
});

export const alertClear = (): AlertClearAction => ({
  type: AlertActionType.ALERT_CLEAR,
});

export const alertDisplayFailureNetwork = (
  status: number,
  message: string
): AlertDisplayFailureAction => {
  if (status < 500) return alertDisplayFailure(message);
  return alertDisplayFailure('internal server error');
};
