import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { MdMailOutline, MdPersonOutline } from 'react-icons/md';
import { SubmitButton } from '../../common/buttons';
import { Label } from '../../common/label';
import { getErrorProps } from '../../common/react-hook-form/get-error-props';
import { Link } from '../../common/link';
import { EmailField } from '../common/email-field';
import { OpenAuth } from '../common/open-auth';
import { PasswordField } from '../common/password-field';
import { LoginLinkWrapper } from './login-link-wrapper.styled';
import { RegistrationCondition } from './registration-condition.styled';
import { RegistrationContainer } from './registration-container.styled';
import { RegistrationHeaderTitle } from './registration-header-title.stlyed';
import { RegistrationHeader } from './registration-header.stlyed';
import { RegistrationLogo } from './registration-logo.styled';
import { registrationSchema } from './registration-schema';
import { RegistrationSignature } from './registration-signature.styled';
import { RegistrationWrapper } from './registration-wrapper.styled';
import { useRegistration } from './registration.hook';
import { RegistrationValues } from './registration.values';

export const Registration: React.FC = () => {
  const { loading, register } = useRegistration();
  const { handleSubmit, control } = useForm<RegistrationValues>({
    mode: 'all',
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleFormSubmit: SubmitHandler<RegistrationValues> = (data) => {
    register({ variables: { data } });
  };
  return (
    <RegistrationWrapper>
      <RegistrationHeader>
        <RegistrationLogo />
        <RegistrationHeaderTitle>make most of your teamwork!</RegistrationHeaderTitle>
      </RegistrationHeader>

      <RegistrationContainer>
        <OpenAuth />
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate autoComplete="off">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => {
              const errorProps = getErrorProps(fieldState);
              const { name } = field;

              return (
                <>
                  <Label name={name} htmlFor={name} icon={MdPersonOutline} />
                  <TextField
                    {...field}
                    {...errorProps}
                    fullWidth
                    id={name}
                    variant="outlined"
                    size="medium"
                    type="text"
                    placeholder="i.e. example@example.com"
                  />
                </>
              );
            }}
          />
          {/* TODO:fix the type */}
          <EmailField control={control as any} />
          <PasswordField control={control as any} />
          <SubmitButton fullWidth text="Agree 	&amp; Join" inProgress={loading} />
        </form>
        <RegistrationCondition>
          you agree to the
          <Link href="/register">Privacy Policy</Link>
          and
          <Link href="/register">Terms of Use</Link>
        </RegistrationCondition>
        <LoginLinkWrapper>
          already on assign?
          <Link href="/login">sign in</Link>
        </LoginLinkWrapper>
      </RegistrationContainer>
      <RegistrationSignature />
    </RegistrationWrapper>
  );
};
