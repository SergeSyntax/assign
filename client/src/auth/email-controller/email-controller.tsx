import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import { Label } from 'src/common/label';
import { ControllerProps, getErrorProps } from 'src/common/react-hook-form';

export const EmailController: React.FC<ControllerProps> = (props) => {
  return (
    <Controller
      name="email"
      {...props}
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
  );
};
