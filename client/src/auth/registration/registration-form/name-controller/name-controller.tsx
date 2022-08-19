import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { MdPersonOutline } from 'react-icons/md';
import { Label } from 'src/common/label';
import { ControllerProps, getErrorProps } from 'src/common/react-hook-form';

export const NameController: React.FC<ControllerProps> = (props) => {
  return (
    <Controller
      name="name"
      {...props}
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
  );
};
