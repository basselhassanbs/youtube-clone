import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
  color: string;
  width: number;
  height: number;
}

export const useClasses = makeStyles<Theme, Props>((theme) => ({
  avatar: {
    height: (props) => props.height,
    width: (props) => props.width,
    borderRadius: '50%',
    backgroundColor: (props) => props.color,
    color: '#FFF',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
