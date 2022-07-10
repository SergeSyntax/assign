import React from 'react';
import { useScrollTrigger, Zoom } from '@mui/material';
import { IoIosArrowUp } from 'react-icons/io';
import { ScrollUpButtonFab } from './scroll-up-button.styled';

const SCROLL_POSITION = 0;

export const ScrollUpButton: React.FC = () => {
  const trigger = useScrollTrigger();

  return (
    <Zoom in={trigger}>
      <ScrollUpButtonFab
        color="default"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: SCROLL_POSITION })}
      >
        <IoIosArrowUp />
      </ScrollUpButtonFab>
    </Zoom>
  );
};
