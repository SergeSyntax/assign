import { AlertAction, AlertActionType, AlertState } from './alert.types';

interface AlertState {
  stale: boolean;
  error: boolean;
  message: string;
}

const BLANK_MESSAGE = '';

export const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case AlertActionType.ALERT_DISPLAY:
      return { ...state, stale: false, error: false, message: action.payload };
    case AlertActionType.ALERT_DISPLAY_FAILURE:
      return { ...state, stale: false, error: true, message: action.payload };
    case AlertActionType.ALERT_CLEAR:
      return { ...state, stale: true, error: false, message: BLANK_MESSAGE };
    default:
      return state;
  }
};
