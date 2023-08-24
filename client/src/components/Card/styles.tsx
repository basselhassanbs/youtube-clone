import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
  type: 'sm' | 'lg';
};

export const useClasses = makeStyles<Theme, Props>((theme) => ({
  container: {
    width: ({ type }) => (type === 'sm' ? '' : '360px'),
    maxWidth: '400px',
    cursor: 'pointer',
    marginInline: ({ type }) => (type === 'sm' ? '' : '20px'),
    marginBottom: ({ type }) => (type === 'sm' ? '10px' : '20px'),
    flexGrow: 1,
    display: ({ type }) => (type === 'sm' ? 'flex' : ''),
    gap: '10px',
  },
  img: {
    width: '100%',
    height: ({ type }) => (type === 'sm' ? '100px' : '200px'),
    borderRadius: '8px',
    flex: ({ type }) => (type === 'sm' ? 1 : ''),
  },
  details: {
    display: 'flex',
    gap: '12px',
    marginTop: ({ type }) => (type === 'sm' ? '' : '16px'),
    flex: ({ type }) => (type === 'sm' ? 1 : ''),
  },
  channelImg: {
    height: '36px',
    width: '36px',
    borderRadius: '20px',
  },
  text: {},
  title: {
    fontSize: '14px',
    fontWeight: 500,
    color: theme.text,
  },
  channelName: {
    fontSize: '14px',
    color: theme.textSoft,
    margin: '9px 0',
  },
  info: {
    fontSize: '14px',
    color: theme.textSoft,
  },
}));
