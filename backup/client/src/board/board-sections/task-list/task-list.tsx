import React from 'react';
import { SectionFields_tasks } from '../__generated__/SectionFields';
import { TaskItem } from './task-item';

interface TaskListProps {
  tasks: SectionFields_tasks[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
