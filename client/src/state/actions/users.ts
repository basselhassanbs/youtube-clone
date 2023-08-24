import { UserInfo } from '../../shared/interfaces';
import { ActionType } from '../action-types';

interface FetchUsersAction {
  type: ActionType.FETCH_USERS;
  payload: UserInfo[];
}

interface FetchUserAction {
  type: ActionType.FETCH_CURRENT_USER;
  payload: UserInfo;
}

interface SubscribeUserAction {
  type: ActionType.SUBSCRIBE_USER;
  payload: string;
}

interface UnsubscribeUserAction {
  type: ActionType.UNSUBSCRIBE_USER;
  payload: string;
}

export type Action =
  | FetchUserAction
  | SubscribeUserAction
  | UnsubscribeUserAction
  | FetchUsersAction;
