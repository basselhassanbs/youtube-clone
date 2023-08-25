import React, { useEffect, useState } from 'react';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SigninInput } from '../../shared/interfaces';

const schema = z.object({
  email: z
    .string()
    .email()
    .min(5, { message: 'Email must be at least 5 characters.' }),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters.' }),
});

type FormData = z.infer<typeof schema>;
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SigninInput) => {
    signin(data, navigate);
  };

  const classes = useClasses();
  const navigate = useNavigate();
  const { signin } = useActions();
  const { authenticated, error } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, []);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: true, minLength: 5 })}
        placeholder='email'
        className={classes.input}
      />
      {errors.email && <p className={classes.error}>{errors.email.message}</p>}
      <input
        {...register('password', { required: true, minLength: 5 })}
        placeholder='password'
        type='password'
        className={classes.input}
      />
      {errors.password && (
        <p className={classes.error}>{errors.password.message}</p>
      )}

      <button type='submit' className={classes.button}>
        Sign in
      </button>

      {error && <span className={classes.error}>{error}</span>}
    </form>
  );
};

export default Signin;
