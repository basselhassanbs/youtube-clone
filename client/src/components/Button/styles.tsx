import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles<Theme>((theme: Theme) => ({
  button: {
    backgroundColor: 'transparent',
    borderRadius: '3px',
    padding: '5px 15px',
    border: '1px solid #3ea6ff',
    color: '#3ea6ff',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: 500,
    cursor: 'pointer',
  },
}));
