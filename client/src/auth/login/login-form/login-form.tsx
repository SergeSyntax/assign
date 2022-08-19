import React from 'react';
import { loginResolver } from './login-form.util';
import { EmailController } from 'src/auth/email-controller';
import { PasswordController } from 'src/auth/password-controller';
import { SubmitButton } from 'src/common/button/button';
import { useForm } from 'react-hook-form';

interface LoginVariables {}

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginVariables>({
    resolver: loginResolver,
    mode: 'all',
  });
  // const { loading, register } = useRegistration();

  // const handleFormSubmit: SubmitHandler<LoginVariables> = (data) => register({ variables: { createUserData: data } });

  const commonAttributes = { control, defaultValue: '' };

  return (
    <form
      // onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      autoComplete="off"
    >
      <EmailController {...commonAttributes} />
      <PasswordController {...commonAttributes} />
      <SubmitButton
        disabled={!isValid}
        fullWidth
        text="Agree &amp; Join"
        inProgress={true}
        // inProgress={loading}
      />
    </form>
  );
};
