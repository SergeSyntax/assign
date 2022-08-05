import { ClickAwayListener, Collapse } from '@mui/material';
import React from 'react';
import { ButtonCreateSection } from './button';
import { ContainerCreateSection } from './container';
import { FadeTop } from '../../common/hide-action/fade-top';
import { FormCreateSection } from './form';
import { WrapperCreateSection } from './wrapper';
import { useOpenForm } from 'src/components/common/hide-action/use-open-form.hook';

interface Props {
  projectId: string;
}

export const CreateSection: React.FC<Props> = ({ projectId }) => {
  const { ref, openForm, handleOpen, handleClose, handleClickAway } = useOpenForm(0);

  return (
    <WrapperCreateSection ref={ref}>
      <FadeTop timeout={{ enter: 600 }} mountOnEnter unmountOnExit in={!openForm}>
        <ButtonCreateSection onClick={handleOpen} variant="contained" fullWidth>
          Create Section
        </ButtonCreateSection>
      </FadeTop>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Collapse timeout={{ enter: 200, exit: 100 }} in={openForm} mountOnEnter unmountOnExit>
          <ContainerCreateSection elevation={4}>
            <FormCreateSection projectId={projectId} handleClose={handleClose} />
          </ContainerCreateSection>
        </Collapse>
      </ClickAwayListener>
    </WrapperCreateSection>
  );
};
