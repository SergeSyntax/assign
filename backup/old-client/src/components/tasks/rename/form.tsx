import React from 'react';
import { Field, Form, Formik } from 'formik';
import { ValuesRenameTask } from './values.interface';
import { renameTaskValidationSchema } from './schema';
import { FieldTitleTask } from './field';
import { useRenameTask } from './use-rename.hook';
import { TaskRes } from '../task-res.interface';
import { Task } from '../__generated__/Task';

interface Props {
  task: Task;
  handleClose: () => void;
}

export const FormRenameTask = ({ task, handleClose }: Props) => {
  const { mutateAsync, isLoading } = useRenameTask();
  return (
    <Formik<ValuesRenameTask>
      validationSchema={renameTaskValidationSchema}
      initialValues={{ title: task.title, taskId: task.id }}
      onSubmit={async values => {
        await mutateAsync(values);
        handleClose();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form style={{ flex: 1 }} autoComplete="off" noValidate>
            <Field
              autoFocus
              multiline
              onBlur={handleSubmit}
              size="medium"
              fullWidth
              name="title"
              component={FieldTitleTask}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
