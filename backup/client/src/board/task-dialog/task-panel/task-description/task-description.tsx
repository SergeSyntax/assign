import React, { useState } from 'react';
import { TaskFieldForm } from '../common/task-field-form.styled';
import { TaskFieldLabel, TaskInputWrapper, useSubmitFormOnBlur } from '../common';
import { GrDocumentText } from 'react-icons/gr';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateTask } from '../update-task.hook';
import { FetchTask_fetchTask } from '../../__generated__/FetchTask';
import { TaskDescriptionField } from './task-description-field';
import { UpdateDescriptionFieldValues } from './update-description-field-values.interface';
import { TaskDescriptionText } from './task-description-text.styled';

interface TaskDescriptionProps {
  task: FetchTask_fetchTask;
}

const name = 'description';
const placeholder = 'Add more detail to this task...';

export const TaskDescription: React.FC<TaskDescriptionProps> = ({ task }) => {
  const [showInput, setShowInput] = useState(false);
  const showInputHandler = () => setShowInput((prevValue) => !prevValue);
  const { formRef, handleBlur } = useSubmitFormOnBlur(showInputHandler);
  const { control, handleSubmit } = useForm<UpdateDescriptionFieldValues>({
    defaultValues: { description: task?.description ?? '' },
    mode: 'all',
  });

  const { updateTask, loading } = useUpdateTask();

  const handleDueDateSubmit: SubmitHandler<UpdateDescriptionFieldValues> = async ({
    description,
  }) => {
    await updateTask({ variables: { id: task.id, data: { description } } });
  };

  return (
    <TaskFieldForm ref={formRef} onSubmit={handleSubmit(handleDueDateSubmit)}>
      <TaskFieldLabel label={name} icon={GrDocumentText} name={name} />
      <TaskInputWrapper>
        {showInput || loading ? (
          <TaskDescriptionField
            control={control}
            handleBlur={handleBlur}
            name={name}
            placeholder={placeholder}
          />
        ) : (
          <TaskDescriptionText
            sx={{ color: task?.description ? 'inherit' : '#b3b3b3' }}
            onClick={showInputHandler}
          >
            {task?.description || placeholder}
          </TaskDescriptionText>
        )}
      </TaskInputWrapper>
    </TaskFieldForm>
  );
};
