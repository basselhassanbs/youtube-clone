import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
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
  error: {
    color: 'red',
    fontSize: '12px',
    alignSelf: 'self-start',
  },
}));
