import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { Label } from '../../../common/label';
import { getErrorProps } from '../../../common/react-hook-form/get-error-props';
import { PasswordLabelButton } from './password-label-button.styled';

interface PasswordFieldProps {
  control: Control;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({ control }) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState }) => {
        const errorProps = getErrorProps(fieldState);
        const { name } = field;

        return (
          <>
            <Label name={name} htmlFor={name} icon={MdMailOutline}>
              <PasswordLabelButton onClick={() => setIsPasswordHidden((prevValue) => !prevValue)}>
                {isPasswordHidden ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </PasswordLabelButton>
            </Label>
            <TextField
              {...field}
              {...errorProps}
              fullWidth
              id={name}
              variant="outlined"
              size="medium"
              type={isPasswordHidden ? 'password' : 'text'}
              placeholder="i.e. example@example.com"
            />
          </>
        );
      }}
    />
  );
};
