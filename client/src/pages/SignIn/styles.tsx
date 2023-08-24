import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 100px)',
    color: theme.text,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: theme.bgLighter,
    border: `1px solid ${theme.soft}`,
    gap: '10px',
  },
  h1: {
    fontSize: '24px',
  },
  h2: {
    fontSize: '20px',
    fontWeight: 300,
  },
  input: {
    width: '100%',
    padding: '10px',
    border: `1px solid ${theme.soft}`,
    backgroundColor: 'transparent',
    // outline: 'none',
    borderRadius: '3px',
    color: theme.text,
  },
  button: {
    backgroundColor: theme.soft,
    border: 'none',
    padding: '10px 20px',
    color: theme.textSoft,
    fontWeight: 500,
    cursor: 'pointer',
    borderRadius: '3px',
  },
  more: {
    display: 'flex',
    fontSize: '12px',
    color: theme.textSoft,
    marginTop: '10px',
  },
  links: {
    marginLeft: '50px',
  },
  link: {
    marginLeft: '30px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    alignSelf: 'self-start',
  },
}));
