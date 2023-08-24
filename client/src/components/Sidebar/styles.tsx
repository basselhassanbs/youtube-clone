import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    minWidth: '220px',
    backgroundColor: theme.bgLighter,
    height: '100vh',
    color: theme.text,
    position: 'sticky',
    top: 0,
    fontSize: '14px',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'scroll',
    },
    // /* width */
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '16px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      background: theme.bg,
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  wrapper: {
    padding: '18px 27px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 'bold',
    marginBottom: '25px',
    cursor: 'pointer',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    cursor: 'pointer',
    padding: '7.5px 0px',
    '&:hover': {
      backgroundColor: theme.soft,
    },
  },
  hr: {
    margin: '15px 0px',
    border: `0.5px solid ${theme.soft}`,
  },
  like: {},
  button: {
    backgroundColor: 'transparent',
    borderRadius: '3px',
    padding: '5px 15px',
    border: '1px solid #3ea6ff',
    color: '#3ea6ff',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginTop: '10px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  h2: {
    color: '#aaaaaa',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '20px',
  },
}));
