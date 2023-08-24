import { ActionType } from '../action-types';
import { Action } from '../actions/auth';

interface AuthState {
  authenticated: string;
  loading: boolean;
  error: string | null;
  showPopup: boolean;
}

const initialState: AuthState = {
  authenticated: localStorage.getItem('token') || '',
  loading: false,
  error: null,
  showPopup: false,
};

const reducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case ActionType.AUTH_USER:
      return {
        ...state,
        authenticated: '',
        loading: true,
        error: null,
      };
    case ActionType.AUTH_USER_SUCCESS:
      return {
        ...state,
        authenticated: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.AUTH_USER_ERROR:
      return {
        ...state,
        authenticated: '',
        loading: false,
        error: action.payload,
      };
    case ActionType.SIGN_OUT:
      return {
        ...state,
        authenticated: '',
        loading: false,
        error: null,
      };
    case ActionType.SHOW_POPUP:
      return {
        ...state,
        showPopup: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
