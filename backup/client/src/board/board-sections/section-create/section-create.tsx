import { ClickAwayListener, Collapse } from '@mui/material';
import React from 'react';
import { FadeTop } from '../fade-top';
import { useOpenForm } from '../use-open-form.hook';
import { SectionCreateButton } from './section-create-button.styled';
import { SectionCreateContent } from './section-create-content.styled';
import { SectionCreateForm } from './section-create-form';
import { SectionCreateWrapper } from './section-create-wrapper';

const SCROLL_ANIMATION_MILLISECONDS = 0;
const CREATE_SECTION_ENTER = 600;
const CREATE_SECTION_FORM_ENTER = 200;
const CREATE_SECTION_FORM_EXIT = 100;

interface SectionCreateProps {
  projectId: string;
}

export const SectionCreate: React.FC<SectionCreateProps> = (props) => {
  const { ref, isOpen, handleOpen, handleClose, handleClickAway } = useOpenForm(
    SCROLL_ANIMATION_MILLISECONDS
  );
  const isClosed = !isOpen;

  const handleSectionCreateOpen: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    handleOpen(e);
    e.stopPropagation();
  };

  return (
    <SectionCreateWrapper ref={ref}>
      <FadeTop mountOnEnter unmountOnExit timeout={{ enter: CREATE_SECTION_ENTER }} in={isClosed}>
        <SectionCreateButton onClick={handleSectionCreateOpen}>Create Section</SectionCreateButton>
      </FadeTop>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Collapse
          mountOnEnter
          unmountOnExit
          timeout={{
            enter: CREATE_SECTION_FORM_ENTER,
            exit: CREATE_SECTION_FORM_EXIT,
          }}
          in={isOpen}
        >
          <SectionCreateContent>
            <SectionCreateForm {...props} handleClose={handleClose} />
          </SectionCreateContent>
        </Collapse>
      </ClickAwayListener>
    </SectionCreateWrapper>
  );
};
