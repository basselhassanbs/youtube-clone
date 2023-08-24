import { ActionType } from '../action-types';
import { Action } from '../actions/users';
import { UserInfo } from '../../shared/interfaces';
import { produce } from 'immer';
import { stat } from 'fs/promises';

interface UsersState {
  users: UserInfo[];
  currentUser: UserInfo;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  currentUser: {
    _id: '',
    name: '',
    img: '',
    subscribers: 0,
    subscribedUsers: [],
  },
  loading: false,
  error: null,
};

const reducer = produce(
  (state: UsersState = initialState, action: Action): UsersState => {
    switch (action.type) {
      case ActionType.FETCH_USERS:
        state.users = action.payload;
        return state;
      case ActionType.FETCH_CURRENT_USER:
        state.currentUser = action.payload;
        return state;
      case ActionType.SUBSCRIBE_USER:
        state.currentUser.subscribedUsers.push(action.payload);
        state.users = state.users.map((user) =>
          user._id === action.payload
            ? { ...user, subscribers: user.subscribers + 1 }
            : user
        );
        return state;
      case ActionType.UNSUBSCRIBE_USER:
        state.currentUser.subscribedUsers =
          state.currentUser.subscribedUsers.filter(
            (id) => id !== action.payload
          );
        state.users = state.users.map((user) =>
          user._id === action.payload
            ? { ...user, subscribers: user.subscribers - 1 }
            : user
        );
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
