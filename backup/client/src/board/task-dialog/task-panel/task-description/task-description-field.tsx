import { Control, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';
import { UpdateDescriptionFieldValues } from './update-description-field-values.interface';

interface DateTimeFieldProps {
  control: Control<UpdateDescriptionFieldValues, any>;
  handleBlur: () => void;
  name: string;
  placeholder: string;
}

export const TaskDescriptionField: React.FC<DateTimeFieldProps> = ({
  control,
  handleBlur,
  name,
  placeholder,
}) => {
  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            size="small"
            autoFocus
            inputProps={{
              sx: {
                fontFamily: 'Lato, sans-serif',
                fontSize: '1.5rem',
                lineHeight: 1.5,
                fontWeight: 400,
                verticalAlign: 'middle',
                minHeight: '5rem',
                wordBreak: 'break-word',
                letterSpacing: 'normal',
              },
            }}
            fullWidth
            multiline
            {...field}
            placeholder={placeholder}
            onBlur={handleBlur}
            id={name}
            hidden={true}
          />
        );
      }}
    />
  );
};
