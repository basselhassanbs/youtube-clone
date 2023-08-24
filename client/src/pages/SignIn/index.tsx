import React, { useState } from 'react';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const classes = useClasses();
  const navigate = useNavigate();
  const { signin, signup } = useActions();
  const { error } = useTypedSelector((state) => state.auth);
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
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Sign in</h1>
        <h2 className={classes.h2}>to continue to BaselTube</h2>
        <input
          value={signinData.email}
          onChange={(e) =>
            setSigninData({ ...signinData, email: e.target.value })
          }
          placeholder='email'
          className={classes.input}
        />
        <input
          value={signinData.password}
          onChange={(e) =>
            setSigninData({ ...signinData, password: e.target.value })
          }
          placeholder='password'
          className={classes.input}
        />
        {error && type == 'signin' && (
          <span className={classes.error}>{error}</span>
        )}

        <button
          className={classes.button}
          onClick={handleSignin}
          disabled={signinData.email == '' || signinData.password == ''}
        >
          Sign in
        </button>
        <h2 className={classes.h1}>or</h2>
        <input
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
          placeholder='username'
          className={classes.input}
        />
        <input
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
          placeholder='email'
          className={classes.input}
        />
        <input
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
          placeholder='password'
          className={classes.input}
        />
        {error && type == 'signup' && (
          <span className={classes.error}>{error}</span>
        )}
        <button
          className={classes.button}
          onClick={handleSignup}
          disabled={
            signupData.name == '' ||
            signupData.email == '' ||
            signupData.password == ''
          }
        >
          Sign up
        </button>
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
