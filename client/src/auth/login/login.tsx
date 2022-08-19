import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginSchema } from './login-schema';
import { LoginHeader } from './login-header';
import { LoginLinks } from './login-links/login-links';
import { LoginContainer, LoginWrapper } from './login.styled';
import { OpenAuth } from '../open-auth';

interface LoginVariables {}

export const Login: React.FC = () => {
  // const { loading, login } = useLogin();
  const { handleSubmit, control } = useForm<LoginVariables>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
  });

  const handleFormSubmit: SubmitHandler<LoginVariables> = (variables) => {
    // login({ variables });
  };

  return (
    <LoginWrapper>
      <LoginHeader />
      <LoginContainer maxWidth="xs">
        <OpenAuth />
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate autoComplete="off">
          {/* <EmailField control={control} />
          <PasswordField control={control} />
          <SubmitButton fullWidth text="Sign In" inProgress={loading} /> */}
        </form>
      </LoginContainer>
      <LoginLinks />
    </LoginWrapper>
  );
};
