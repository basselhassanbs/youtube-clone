import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    gap: '24px',
  },
  content: {
    flex: 5,
  },
  iframe: {
    border: 'none',
  },
  title: {
    fontSize: '18px',
    fontWeight: '400',
    color: theme.text,
    marginTop: '20px',
    marginBottom: '10px',
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: {
    color: theme.textSoft,
  },
  buttons: {
    display: 'flex',
    gap: '20px',
    color: theme.text,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    cursor: 'pointer',
  },
  hr: {
    margin: '15px 0px',
    border: `0.5px solid ${theme.soft}`,
  },
  channel: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  channelInfo: {
    display: 'flex',
    gap: '10px',
  },
  channelImg: {
    height: '42px',
    width: '42px',
    borderRadius: '50%',
  },
  channelDetails: {
    color: theme.text,
  },
  channelName: {
    fontWeight: 500,
  },
  channelCounter: {
    color: theme.textSoft,
    marginTop: '5px',
    marginBottom: '20px',
    fontSize: '12px',
  },
  description: {
    fontSize: '14px',
  },
  subscribe: {
    backgroundColor: '#cc1a00',
    color: 'white',
    fontWeight: 500,
    border: 'none',
    height: 'max-content',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '3px',
  },
}));
