import { Dispatch } from 'react';
import { Action } from '../actions/auth';
import authService from '../../services/auth-service';
import { SigninInput, SignupInput } from '../../shared/interfaces';
import { ActionType } from '../action-types';
import { NavigateFunction } from 'react-router-dom';

export const signup = (data: SignupInput, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.AUTH_USER,
    });
    try {
      const res = await authService.signup(data);
      localStorage.setItem('token', res.data.token);

      dispatch({
        type: ActionType.AUTH_USER_SUCCESS,
        payload: res.data.token,
      });
      navigate('/');
    } catch (error: any) {
      dispatch({
        type: ActionType.AUTH_USER_ERROR,
        payload: error.message,
      });
    }
  };
};

export const signin = (data: SigninInput, navigate: NavigateFunction) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.AUTH_USER,
    });

    try {
      const res = await authService.signin(data);
      localStorage.setItem('token', res.data.token);

      dispatch({
        type: ActionType.AUTH_USER_SUCCESS,
        payload: res.data.token,
      });

      navigate('/');
    } catch (error) {
      dispatch({
        type: ActionType.AUTH_USER_ERROR,
        payload: 'Invalid credentials',
      });
    }
  };
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: ActionType.SIGN_OUT,
  };
};

export const setShowPopup = (show: boolean) => {
  return {
    type: ActionType.SHOW_POPUP,
    payload: show,
  };
};
