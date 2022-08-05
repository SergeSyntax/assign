import React, { useState } from 'react';
import { GoX } from 'react-icons/go';
import { FetchTask_fetchTask } from '../../__generated__/FetchTask';
import { TaskPanelHeaderCloseButton } from './task-panel-header-close-button.styled';
import { TaskPanelHeaderTitle } from './task-panel-header-title.styled';
import { TaskPanelHeaderWrapper } from './task-panel-header-wrapper.styled';
import { TaskRename } from './task-rename';

interface TaskPanelHeaderProps {
  task: FetchTask_fetchTask;
  handleClose: () => void;
}

export const TaskPanelHeader: React.FC<TaskPanelHeaderProps> = ({ handleClose, task }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <TaskPanelHeaderWrapper>
      {showForm ? (
        <TaskRename handleHide={() => setShowForm(false)} task={task} />
      ) : (
        <TaskPanelHeaderTitle onClick={() => setShowForm(true)}>{task?.title}</TaskPanelHeaderTitle>
      )}
      <TaskPanelHeaderCloseButton icon={GoX} size="medium" onClick={handleClose} />
    </TaskPanelHeaderWrapper>
  );
};
