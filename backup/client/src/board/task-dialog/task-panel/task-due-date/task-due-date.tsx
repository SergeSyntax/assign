import React, { useRef } from 'react';
import { TaskFieldForm, TaskFieldLabel, TaskInputWrapper, useSubmitFormOnBlur } from '../common';
import { ImClock } from 'react-icons/im';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateTask } from '../update-task.hook';
import { FetchTask_fetchTask } from '../../__generated__/FetchTask';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskDueDateSchema } from './task-due-date-schema';
import { DateTimeField } from './date-time-field';
import { UpdateDueDateFieldValues } from './update-due-date-field-values.interface';

interface TaskDueDateProps {
  task: FetchTask_fetchTask;
}

const name = 'dueDate';

export const TaskDueDate: React.FC<TaskDueDateProps> = ({ task }) => {
  const { updateTask } = useUpdateTask();
  const { formRef, handleBlur } = useSubmitFormOnBlur();

  const handleDueDateSubmit: SubmitHandler<UpdateDueDateFieldValues> = async ({ dueDate }) => {
    await updateTask({ variables: { id: task.id, data: { dueDate } } });
  };
  const { control, handleSubmit } = useForm<UpdateDueDateFieldValues>({
    defaultValues: { dueDate: task.dueDate },
    resolver: yupResolver(taskDueDateSchema),
    mode: 'all',
  });

  return (
    <TaskFieldForm
      ref={formRef}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(handleDueDateSubmit)}
    >
      <TaskFieldLabel label="due date" icon={ImClock} name={name} />
      <TaskInputWrapper>
        <DateTimeField control={control} handleBlur={handleBlur} name={name} />
      </TaskInputWrapper>
    </TaskFieldForm>
  );
};
