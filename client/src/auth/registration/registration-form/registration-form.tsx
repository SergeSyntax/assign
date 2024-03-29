import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SubmitButton } from 'src/common/button/button';
import { useRegistration } from './registration-form.hook';
import { registrationResolver } from './registration-form.util';
import { PasswordController } from '../../password-controller';
import { NameController } from './name-controller';
import { EmailController } from '../../email-controller';
import { formCommonProps } from 'src/common/react-hook-form';
import { RegistrationInput } from 'src/common/apollo/types';

export const RegistrationForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    setError,
  } = useForm<RegistrationInput>({
    resolver: registrationResolver,
    mode: 'all',
  });

  const { loading, register } = useRegistration();
  const handleFormSubmit: SubmitHandler<RegistrationInput> = (data) =>
    register({
      variables: { registrationInput: data },
      onError: ({ message }) => {
        if (/email address already in use/i.test(message)) setError('email', { message, type: 'validate' });
      },
    });
  const commonAttributes = { control, defaultValue: '' };

  return (
    <form {...formCommonProps} onSubmit={handleSubmit(handleFormSubmit)}>
      <NameController {...commonAttributes} />
      <EmailController {...commonAttributes} />
      <PasswordController {...commonAttributes} />
      <SubmitButton disabled={!isValid} fullWidth text="Agree &amp; Join" inProgress={loading} />
    </form>
  );
};
