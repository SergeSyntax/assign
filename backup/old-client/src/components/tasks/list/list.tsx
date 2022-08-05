import React from 'react';
import { ItemTask } from '../item';
import { TaskRes } from '../task-res.interface';

interface Props {
  tasks: TaskRes[];
}

export const ListTask: React.FC<Props> = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <ItemTask key={task.id} task={task} />
      ))}
    </>
  );
};
