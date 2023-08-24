import { Dispatch } from 'react';
import userService from '../../services/user-service';
import { ActionType } from '../action-types';
import { Action } from '../actions/users';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await userService.getAll();

      dispatch({
        type: ActionType.FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCurrentUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await userService.getCurrentUser();

      dispatch({
        type: ActionType.FETCH_CURRENT_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const subscribe = (userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await userService.subscribe(userId);

      dispatch({
        type: ActionType.SUBSCRIBE_USER,
        payload: res.data._id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const unsubscribe = (userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await userService.unsubscribe(userId);

      dispatch({
        type: ActionType.UNSUBSCRIBE_USER,
        payload: res.data._id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
