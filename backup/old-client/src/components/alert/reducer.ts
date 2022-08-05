import { AlertAction, ActionTypeAlert, StateAlert } from './types';

export const alertReducer = (state: StateAlert, action: AlertAction): StateAlert => {
  switch (action.type) {
    case ActionTypeAlert.ALERT_DISPLAY:
      return { ...state, stale: false, error: false, message: action.payload };
    case ActionTypeAlert.ALERT_DISPLAY_FAILURE:
      return { ...state, stale: false, error: true, message: action.payload };
    case ActionTypeAlert.ALERT_CLEAR:
      return { ...state, stale: true, error: false, message: '' };
    default:
      return state;
  }
};
