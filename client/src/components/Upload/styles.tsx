import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    minHeight: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: 1,
    backgroundColor: 'rgb(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '600px',
    height: '600px',
    backgroundColor: theme.bgLighter,
    color: theme.text,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontWeight: 500,
    fintSize: '18px',
  },
  title: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    border: `2px solid ${theme.soft}`,
    padding: '10px',
    borderRadius: '3px',
    color: theme.text,
    resize: 'none',
  },
  btn: {
    border: 'none',
    backgroundColor: theme.soft,
    padding: '10px 20px',
    fontWeight: 500,
    color: theme.textSoft,
    cursor: 'pointer',
  },
  label: {
    fontSize: '14px',
  },
}));
