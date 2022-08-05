import { Button, ClickAwayListener, Collapse } from '@mui/material';
import React from 'react';
import { FadeTop } from '../../fade-top';
import { TaskCreateButtonIcon } from './task-create-button-icon.styled';
import { TaskCreateForm } from './task-create-form';
import { TaskCreateWrapper } from './task-create-wrapper.styled';
import { useOpenForm } from '../../use-open-form.hook';

const SCROLL_ANIMATION_MILLISECONDS = 140;
const BUTTON_FADE_ANIMATION_MILLISECONDS = 600;
const CREATE_TASK_FORM_ANIMATION_MILLISECONDS = 100;

interface TaskCreateProps {
  sectionId: string;
}

export const TaskCreate: React.FC<TaskCreateProps> = (props) => {
  const { ref, isOpen, handleOpen, handleClose, handleClickAway } = useOpenForm(
    SCROLL_ANIMATION_MILLISECONDS
  );
  const isFormClosed = !isOpen;

  return (
    <TaskCreateWrapper ref={ref}>
      <FadeTop
        timeout={{ enter: BUTTON_FADE_ANIMATION_MILLISECONDS }}
        mountOnEnter
        unmountOnExit
        in={isFormClosed}
      >
        <Button onClick={handleOpen}>
          <TaskCreateButtonIcon /> Create Task
        </Button>
      </FadeTop>

      <ClickAwayListener
        touchEvent="onTouchStart"
        mouseEvent="onMouseDown"
        onClickAway={handleClickAway}
      >
        <Collapse
          timeout={CREATE_TASK_FORM_ANIMATION_MILLISECONDS}
          in={isOpen}
          mountOnEnter
          unmountOnExit
        >
          <TaskCreateForm {...props} handleClose={handleClose} />
        </Collapse>
      </ClickAwayListener>
    </TaskCreateWrapper>
  );
};
