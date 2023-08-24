import { bindActionCreators } from 'redux';
import { ActionCreators } from '../state';
import { useDispatch } from 'react-redux';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
