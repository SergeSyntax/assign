import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Control, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';
import { getErrorProps } from '../../../../common/react-hook-form/get-error-props';
import { UpdateDueDateFieldValues } from './update-due-date-field-values.interface';
import { MAX_DATE, MIN_DATE } from './task-due-date.const';

interface DateTimeFieldProps {
  control: Control<UpdateDueDateFieldValues, any>;
  handleBlur: () => void;
  name: string;
}

export const DateTimeField: React.FC<DateTimeFieldProps> = ({ control, handleBlur, name }) => {
  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field, fieldState }) => {
        const errorProps = getErrorProps(fieldState);

        return (
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              {...field}
              {...errorProps}
              ampm={false}
              openTo="day"
              mask="__/__/____ __:__"
              inputFormat="dd/MM/yyyy hh:mm"
              minDate={MIN_DATE}
              maxDate={MAX_DATE}
              onClose={handleBlur}
              renderInput={(params) => {
                return (
                  <TextField
                    {...field}
                    {...params}
                    {...errorProps}
                    onBlur={handleBlur}
                    id={name}
                    hidden={true}
                    variant="outlined"
                    size="medium"
                  />
                );
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
