import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useClasses } from './styles';
import { useNavigate } from 'react-router-dom';

const Button = ({ ...props }: any) => {
  const classes = useClasses();
  const navigate = useNavigate();
  return (
    <button
      {...props}
      className={classes.button}
      onClick={() => navigate('/signin')}
    >
      <AccountCircleOutlinedIcon />
      SIGN IN
    </button>
  );
};

export default Button;
