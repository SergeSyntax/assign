import { TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import { Label } from '../../common/label';
import { getErrorProps } from '../../common/react-hook-form/get-error-props';

interface EmailFieldProps {
  control: Control;
}

export const EmailField: React.FC<EmailFieldProps> = ({ control }) => {
  return (
    <Controller
      name="email"
      control={control}
      render={({ field, fieldState }) => {
        const errorProps = getErrorProps(fieldState);
        const { name } = field;

        return (
          <>
            <Label name={name} htmlFor={name} icon={MdMailOutline} />
            <TextField
              {...field}
              {...errorProps}
              fullWidth
              id={name}
              variant="outlined"
              size="medium"
              type="email"
              placeholder="i.e. example@example.com"
            />
          </>
        );
      }}
    />
  );
};
