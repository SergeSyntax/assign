import React, { useState } from 'react';
import { GoX } from 'react-icons/go';
import { FormRenameTask } from '../rename';
import { Task } from '../__generated__/Task';
import { CloseButtonHeaderTask } from './close-button';
import { TitleHeaderTask } from './title';
import { WrapperHeaderTask } from './wrapper';

interface Props {
  task: Task;
  handleClose: () => void;
}

export const HeaderTask: React.FC<Props> = ({ task, handleClose }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <WrapperHeaderTask>
      {showForm ? (
        <FormRenameTask handleClose={() => setShowForm(false)} task={task} />
      ) : (
        <TitleHeaderTask onClick={() => setShowForm(true)}>{task.title}</TitleHeaderTask>
      )}
      <CloseButtonHeaderTask type="submit" icon={GoX} size="medium" onClick={handleClose} />
    </WrapperHeaderTask>
  );
};
