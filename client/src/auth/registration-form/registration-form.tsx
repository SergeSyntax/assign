import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Label } from 'src/common/label';
import { MdPersonOutline, MdMailOutline, MdLockOutline } from 'react-icons/md';
import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getErrorProps } from 'src/common/react-hook-form';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { SubmitButton } from 'src/common/button/button';
import { useRegistration } from './registration-form.hook';
import { PasswordLabelButton } from './registration-form.styled';

export const registrationSchema = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required(),
  name: Yup.string().min(1).max(255).required(),
});

interface RegistrationValues {
  email: string;
  password: string;
  name?: string;
}

export const RegistrationForm: React.FC = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegistrationValues>({
    resolver: yupResolver(registrationSchema),
    mode: 'all',
  });

  const commonAttributes = { control, defaultValue: '' };
  const { loading, register } = useRegistration();

  const handleFormSubmit: SubmitHandler<RegistrationValues> = (data) => {
    console.log('data', data);
    register({ variables: { createUserData: data } });
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        name="name"
        {...commonAttributes}
        render={({ field, fieldState }) => {
          return (
            <>
              <Label name={field.name} icon={MdPersonOutline} />
              <TextField
                {...field}
                {...getErrorProps(fieldState)}
                fullWidth
                id={field.name}
                variant="outlined"
                size="medium"
                type="text"
                placeholder="i.e. Steve Rozmarin"
              />
            </>
          );
        }}
      />
      <Controller
        name="email"
        {...commonAttributes}
        render={({ field, fieldState }) => {
          return (
            <>
              <Label name={field.name} icon={MdMailOutline} />
              <TextField
                {...field}
                {...getErrorProps(fieldState)}
                fullWidth
                id={field.name}
                variant="outlined"
                size="medium"
                type="email"
                placeholder="i.e. example@example.com"
              />
            </>
          );
        }}
      />
      <Controller
        name="password"
        {...commonAttributes}
        render={({ field, fieldState }) => {
          return (
            <>
              <Label name={field.name} icon={MdLockOutline}>
                <PasswordLabelButton onClick={() => setIsPasswordHidden((prevValue) => !prevValue)}>
                  {isPasswordHidden ? <IoEyeOffSharp /> : <IoEyeSharp />}
                </PasswordLabelButton>
              </Label>
              <TextField
                {...field}
                {...getErrorProps(fieldState)}
                fullWidth
                id={field.name}
                variant="outlined"
                size="medium"
                type={isPasswordHidden ? 'password' : 'text'}
                placeholder="i.e. example@!%$5475347"
              />
            </>
          );
        }}
      />
      <SubmitButton disabled={!isValid} fullWidth text="Agree &amp; Join" inProgress={loading} />
    </form>
  );
};
