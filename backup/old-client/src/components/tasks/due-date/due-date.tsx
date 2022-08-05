import React, { Fragment } from 'react';
import { ErrorMessage, Field, FieldProps, Form, Formik, getIn, useFormikContext } from 'formik';
import { ValuesDueDateTask } from './values.interface';
import { dueDateTaskValidationSchema, MAX_DATE, MIN_DATE } from './schema';
import { useDueDateTask } from './use-due-date-task.hook';
import { TaskRes } from '../task-res.interface';
import { LabelTask } from '../label';
import { GrClock } from 'react-icons/gr';

// import {format} from 'date-fns'

import { styled, TextField } from '@mui/material';
import { IconType } from 'react-icons/lib';
import { LocalizationProvider, DateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface Props {
  task: TaskRes;
}

interface DateFieldsetProps {
  icon: IconType;
  name: string;
  label: string;
}

const WrapperFieldTask = styled('div')`
  padding-left: 2.5rem;
`;

const DateTimeField: React.FC<FieldProps<string>> = props => {
  const { field, form, ...rest } = props;
  const { setFieldValue } = useFormikContext();

  const { name } = field;
  const isError = getIn(form.errors, name) && getIn(form.touched, name);
  const getErrorMessage = getIn(form.errors, name);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        openTo="day"
        mask="__/__/____ __:__"
        ampm={false}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        inputFormat="dd/MM/yyyy hh:mm"
        value={field.value}
        onChange={value => {
          setFieldValue(name, value);
        }}
        onClose={() => form.submitForm()}
        renderInput={params => {
          return (
            <TextField
              {...params}
              {...rest}
              id={name}
              fullWidth
              helperText={isError ? getErrorMessage : ' '}
              hidden={!isError || params.value === null}
              variant="outlined"
              size="medium"
              onBlur={() => form.submitForm()}
            />
          );
        }}
      />{' '}
    </LocalizationProvider>
  );
};

{
}

export const DueDateTask = ({ task }: Props) => {
  const { mutateAsync, isLoading } = useDueDateTask();

  return (
    <Formik<ValuesDueDateTask>
      validationSchema={dueDateTaskValidationSchema}
      initialValues={{
        dueDate: task.dueDate,
        taskId: task.id
      }}
      onSubmit={async (values, helpers) => {
        console.log(values.dueDate);

        await mutateAsync(values);
      }}
    >
      {() => {
        return (
          <Form style={{ display: 'flex', flexDirection: 'column' }} autoComplete="off" noValidate>
            <LabelTask label="due date" icon={GrClock} name="dueDate" />
            <WrapperFieldTask>
              <Field name="dueDate" component={DateTimeField} />
            </WrapperFieldTask>
          </Form>
        );
      }}
    </Formik>
  );
};
