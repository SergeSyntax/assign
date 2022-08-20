import React from 'react';
import { loginResolver } from './login-form.util';
import { EmailController } from 'src/auth/email-controller';
import { PasswordController } from 'src/auth/password-controller';
import { SubmitButton } from 'src/common/button/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLogin } from './login-form.hook';
import { LoginInput } from 'src/common/apollo/types';
import { formCommonProps } from 'src/common/react-hook-form';

const SERVER_ERROR_TYPE = 'server';

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    setError,
    trigger,
  } = useForm<LoginInput>({
    resolver: loginResolver,
    mode: 'all',
  });
  const { loading, login } = useLogin();

  const handleFormSubmit: SubmitHandler<LoginInput> = (data) =>
    login({
      variables: { loginInput: data },
      onError: ({ message }) => {
        if (/invalid credentials/i.test(message)) {
          setError('email', { type: SERVER_ERROR_TYPE });
          setError('password', { type: SERVER_ERROR_TYPE, message });
        }
      },
    });

  const commonAttributes = { control, defaultValue: '' };

  return (
    <form
      {...formCommonProps}
      onChange={() => {
        const emailError = errors.email?.type as string | undefined;
        const passwordError = errors.password?.type as string | undefined;
        if (emailError === SERVER_ERROR_TYPE || passwordError === SERVER_ERROR_TYPE) trigger();
      }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <EmailController {...commonAttributes} />
      <PasswordController {...commonAttributes} />
      <SubmitButton disabled={!isValid} fullWidth text="Sign In" inProgress={loading} />
    </form>
  );
};
