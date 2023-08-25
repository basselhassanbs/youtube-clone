import React, { useEffect, useState } from 'react';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

const Login = () => {
  const classes = useClasses();
  const navigate = useNavigate();
  const { signin, signup } = useActions();
  const { authenticated, error } = useTypedSelector((state) => state.auth);
  const [type, setType] = useState('');
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignin = () => {
    signin(signinData, navigate);
    setType('signin');
  };

  const handleSignup = () => {
    signup(signupData, navigate);
    setType('signup');
  };

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Sign in</h1>
        <h2 className={classes.h2}>to continue to BaselTube</h2>
        <Signin />
        <h2 className={classes.h1}>or</h2>
        <Signup />
      </div>
      <div className={classes.more}>
        English(USA)
        <div className={classes.links}>
          <span className={classes.link}>Help</span>
          <span className={classes.link}>Privacy</span>
          <span className={classes.link}>Terms</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
