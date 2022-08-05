import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TaskRenameTitleField } from './task-rename-title-field.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskRenameSchema } from './task-rename-schema';
import { TaskRenameArgs } from './task-rename-args.interface';
import { FetchTask_fetchTask } from '../../../__generated__/FetchTask';
import { useUpdateTask } from '../../update-task.hook';
import { TaskRenameWrapper } from './task-rename-wrapper.styled';

interface TaskRenameProps {
  handleHide: () => void;
  task: FetchTask_fetchTask;
}

export const TaskRename: React.FC<TaskRenameProps> = ({ handleHide, task }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<TaskRenameArgs>({
    defaultValues: { title: task.title },
    mode: 'all',
    resolver: yupResolver(taskRenameSchema),
  });
  const titleKey = 'title';
  const { updateTask } = useUpdateTask();
  const isError = !isValid;

  const handleFormSubmit: SubmitHandler<TaskRenameArgs> = async ({ title }) => {
    await updateTask({ variables: { id: task.id, data: { title } } });
    handleHide();
  };
  const title = watch(titleKey);
  const handleTitleFieldBlur = () => handleFormSubmit({ title });

  return (
    <TaskRenameWrapper autoComplete="off" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <TaskRenameTitleField
        {...register(titleKey)}
        autoFocus
        onBlur={handleSubmit(handleTitleFieldBlur)}
        error={isError}
        helperText={errors[titleKey]?.message ?? ' '}
      />
    </TaskRenameWrapper>
  );
};
