import { UserInfo } from '../../shared/interfaces';
import { ActionType } from '../action-types';

interface AuthUserAction {
  type: ActionType.AUTH_USER;
}

interface AuthUserSuccessAction {
  type: ActionType.AUTH_USER_SUCCESS;
  payload: string;
}

interface AuthUserErrorAction {
  type: ActionType.AUTH_USER_ERROR;
  payload: string;
}

interface SignoutAction {
  type: ActionType.SIGN_OUT;
}

interface ShowPopupAction {
  type: ActionType.SHOW_POPUP;
  payload: boolean;
}

export type Action =
  | AuthUserAction
  | AuthUserSuccessAction
  | AuthUserErrorAction
  | SignoutAction
  | ShowPopupAction;
