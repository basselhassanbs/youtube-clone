import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  newComment: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  channelImg: {
    height: '42px',
    width: '42px',
    borderRadius: '50%',
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: `1px solid ${theme.soft}`,
    width: '100%',
    outline: 'none',
  },
}));
