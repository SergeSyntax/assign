import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';
import { MdLockOutline } from 'react-icons/md';
import { Label } from 'src/common/label';
import { ControllerProps, getErrorProps } from 'src/common/react-hook-form';
import { PasswordLabelButton } from './password-controller.styled';

export const PasswordController: React.FC<ControllerProps> = (props) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <Controller
      name="password"
      {...props}
      render={({ field, fieldState }) => {
        return (
          <>
            <Label name={field.name} icon={MdLockOutline}>
              <PasswordLabelButton onClick={() => setHidden((prevValue) => !prevValue)}>
                {isHidden ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </PasswordLabelButton>
            </Label>
            <TextField
              {...field}
              {...getErrorProps(fieldState)}
              fullWidth
              id={field.name}
              variant="outlined"
              size="medium"
              type={isHidden ? 'password' : 'text'}
              placeholder="i.e. example@!%$5475347"
            />
          </>
        );
      }}
    />
  );
};
