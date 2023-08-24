import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
  },
  main: {
    // flex: 8,
    background: theme.bgLighter,
  },
}));
