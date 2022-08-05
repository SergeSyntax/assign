import { Button, Card, CardContent, ClickAwayListener, Collapse, styled } from '@mui/material';
import React from 'react';
import { GoPlus } from 'react-icons/go';
import { FadeTop } from 'src/components/common/hide-action/fade-top';
import { FormCreateTask } from './form';
import { useOpenForm } from '../../common/hide-action/use-open-form.hook';
import { WrapperCreateTask } from './wrapper';

interface Props {
  sectionId: string;
}

const IconButtonCreateTask = styled(GoPlus)`
  margin-right: 1rem;
  font-size: 0.8em;
`;

export const CreateTask: React.FC<Props> = ({ sectionId }) => {
  const { ref, openForm, handleOpen, handleClose, handleClickAway } = useOpenForm(140);

  return (
    <WrapperCreateTask ref={ref}>
      <FadeTop timeout={{ enter: 600 }} mountOnEnter unmountOnExit in={!openForm}>
        <Button onClick={handleOpen} fullWidth color="inherit">
          <IconButtonCreateTask /> Create Task
        </Button>
      </FadeTop>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Collapse timeout={100} in={openForm} mountOnEnter unmountOnExit>
          <FormCreateTask sectionId={sectionId} handleClose={handleClose} />
        </Collapse>
      </ClickAwayListener>
    </WrapperCreateTask>
  );
};
