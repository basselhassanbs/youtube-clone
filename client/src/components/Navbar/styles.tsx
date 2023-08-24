import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Props {
  showPopup: boolean;
}

export const useClasses = makeStyles<Theme, Props>((theme: Theme) => ({
  container: {
    background: theme.bgLighter,
    position: 'sticky',
    top: 0,
    height: '56px',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    padding: '0px 20px',
  },
  search: {
    width: '40%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    color: theme.text,
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    color: theme.text,
    flex: 1,
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: 500,
    color: theme.text,
    position: 'relative',
  },
  user: { display: 'flex', alignItems: 'center', gap: '10px' },
  avatar: {
    height: '32px',
    width: '32px',
    borderRadius: '50%',
  },
  popup: {
    position: 'absolute',
    top: 45,
    zIndex: 1,
    backgroundColor: theme.bgLighter,
    padding: '10px 20px',
    visibility: (props) => (props.showPopup ? 'visible' : 'hidden'),
  },
  logout: {
    cursor: 'pointer',
  },
}));
