import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '30px 0px',
  },
  img: {
    height: '42px',
    width: '42px',
    borderRadius: '50%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  name: {
    fontSize: '13px',
    fontWeight: 500,
    color: theme.text,
  },
  date: {
    fontSize: '12px',
    fontWeight: 400,
    color: theme.textSoft,
    marginLeft: '5px',
  },
  text: {
    fontSize: '14px',
    color: theme.text,
  },
}));
