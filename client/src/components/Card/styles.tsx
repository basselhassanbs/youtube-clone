import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Props = {
  type: 'sm' | 'lg';
};

export const useClasses = makeStyles<Theme, Props>((theme: Theme) => ({
  container: {
    width: ({ type }) => (type === 'sm' ? '' : '340px'),
    maxWidth: ({ type }) => (type === 'sm' ? '' : '450px'),
    cursor: 'pointer',
    marginInline: ({ type }) => (type === 'sm' ? '' : '10px'),
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
  text: {},
  title: {
    fontSize: '14px',
    fontWeight: 500,
    color: theme.text,
    width: ({ type }) => (type === 'sm' ? '180px' : '340px'),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
