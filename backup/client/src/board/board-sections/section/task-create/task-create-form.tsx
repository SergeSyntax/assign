import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GoX } from 'react-icons/go';
import { useCreateTask } from './create-task.hook';
import { FlexLine } from '../../flex-line';
import { TaskCreateFormSchema } from './task-create-form-schema';
import { TaskCreateFormWrapper } from './task-create-form-wrapper.styled';
import { SmallTextField } from '../../small-text-field.styled';
import { CreateSubmitButton } from '../../create-submit-button.styled';
import { CancelSubmitButton } from '../../cancel-submit-button.styled';

const titleKey = 'title';

interface TaskCreateFormProps {
  handleClose: () => void;
  sectionId: string;
}

interface TaskCreateFormValues {
  title: string;
}

export const TaskCreateForm: React.FC<TaskCreateFormProps> = ({ handleClose, sectionId }) => {
  const { createTask, loading } = useCreateTask();
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<TaskCreateFormValues>({
    resolver: yupResolver(TaskCreateFormSchema),
    mode: 'all',
  });
  const isError = !isValid && isDirty;

  const handleFormSubmit: SubmitHandler<TaskCreateFormValues> = async ({ title }) => {
    await createTask({ variables: { data: { title, sectionId } } });
    handleClose();
  };

  return (
    <TaskCreateFormWrapper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
        <SmallTextField
          {...register(titleKey)}
          error={isError}
          helperText={errors[titleKey]?.message ?? ' '}
          label="Task's Title"
          variant="standard"
        />
        <FlexLine>
          <CreateSubmitButton inProgress={loading} text="create" />
          <CancelSubmitButton icon={GoX} size="small" onClick={handleClose} />
        </FlexLine>
      </form>
    </TaskCreateFormWrapper>
  );
};
