import { capitalize } from 'lodash';
import React from 'react';
import { IconType } from 'react-icons';
import { TaskFieldLabelIcon } from './task-field-label-icon.styled';
import { TaskFieldLabelTitle } from './task-field-label-title.styled';
import { TaskFieldLabelWrapper } from './task-field-label-wrapper.styled';

interface TaskFieldLabelProps {
  icon: IconType;
  label: string;
  name: string;
}

export const TaskFieldLabel: React.FC<TaskFieldLabelProps> = ({
  icon: Icon,
  label,
  name,
  ...rest
}) => {
  return (
    <TaskFieldLabelWrapper htmlFor={name} {...rest}>
      <TaskFieldLabelIcon>
        <Icon />
      </TaskFieldLabelIcon>
      <TaskFieldLabelTitle>{capitalize(label)}</TaskFieldLabelTitle>
    </TaskFieldLabelWrapper>
  );
};
