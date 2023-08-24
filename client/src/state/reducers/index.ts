import { combineReducers } from 'redux';
import authReducer from './authReducer';
import videosReducer from './videosReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  videos: videosReducer,
});
