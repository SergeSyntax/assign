import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SubmitButton } from '../../common/buttons';
import { OpenAuth } from '../common/open-auth';
import { LoginContainer } from './login-container.styled';
import { LoginHeaderLogo } from './login-header-logo.styled';
import { LoginHeaderTitleMain } from './login-header-title-main.styled';
import { LoginHeaderTitleSub } from './login-header-title-sub.styled';
import { LoginHeaderTitle } from './login-header-title.styled';
import { LoginHeaderWrapper } from './login-header-wrapper.styled';
import { loginSchema } from './login-schema';
import { LoginWrapper } from './login-wrapper.styled';
import { useLogin } from './login.hook';
import { LoginVariables } from './__generated__/Login';
import { ForgotPasswordWrapper } from './forgot-password-wrapper.styled';
import { Link } from '../../common/link';
import { RegisterLinkWrapper } from './register-link-wrapper.styled';
import { PasswordField } from '../common/password-field';
import { EmailField } from '../common/email-field';

export const Login: React.FC = () => {
  const { loading, login } = useLogin();
  const { handleSubmit, control } = useForm<LoginVariables>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleFormSubmit: SubmitHandler<LoginVariables> = (variables) => {
    login({ variables });
  };

  return (
    <LoginWrapper>
      <LoginHeaderWrapper>
        <LoginHeaderLogo />
        <LoginHeaderTitle>
          <LoginHeaderTitleMain>Welcome Back!</LoginHeaderTitleMain>
          <LoginHeaderTitleSub>
            <span>Ready to get your team on track?</span>
            <span>Then don&apos;t delay organize and prioritize your project</span>
            <span>with Assign?</span>
          </LoginHeaderTitleSub>
        </LoginHeaderTitle>
      </LoginHeaderWrapper>
      <LoginContainer maxWidth="xs">
        <OpenAuth />
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate autoComplete="off">
          <EmailField control={control} />
          <PasswordField control={control} />
          <SubmitButton fullWidth text="Sign In" inProgress={loading} />
        </form>
      </LoginContainer>
      <ForgotPasswordWrapper>
        <Link href="/password-recovery">Forgot password?</Link>
      </ForgotPasswordWrapper>
      <RegisterLinkWrapper>
        New to Assign?
        <Link href="/registration">Join Now</Link>
      </RegisterLinkWrapper>
    </LoginWrapper>
  );
};
