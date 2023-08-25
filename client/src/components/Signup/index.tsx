import React, { useEffect, useState } from 'react';
import { useClasses } from './styles';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  u_name: z.string().min(5, { message: 'Name must be at least 5 characters.' }),
  u_email: z
    .string()
    .email()
    .min(5, { message: 'Email must be at least 5 characters.' }),
  u_password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters.' }),
});

type FormData = z.infer<typeof schema>;
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    signup(
      {
        name: data.u_name,
        email: data.u_email,
        password: data.u_password,
      },
      navigate
    );
  };

  const classes = useClasses();
  const navigate = useNavigate();
  const { signup } = useActions();
  const { authenticated, error } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, []);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('u_name', { required: true, minLength: 5 })}
        placeholder='username'
        className={classes.input}
      />
      {errors.u_name && (
        <p className={classes.error}>{errors.u_name.message}</p>
      )}
      <input
        {...register('u_email', { required: true, minLength: 5 })}
        placeholder='email'
        className={classes.input}
      />
      {errors.u_email && (
        <p className={classes.error}>{errors.u_email.message}</p>
      )}
      <input
        {...register('u_password', { required: true, minLength: 5 })}
        placeholder='password'
        type='password'
        className={classes.input}
      />
      {errors.u_password && (
        <p className={classes.error}>{errors.u_password.message}</p>
      )}

      <button type='submit' className={classes.button}>
        Sign up
      </button>

      {error && <span className={classes.error}>{error}</span>}
    </form>
  );
};

export default Signup;
