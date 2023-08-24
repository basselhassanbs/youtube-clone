import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 500,
    color: theme.text,
  },
}));
