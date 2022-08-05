import React from 'react';
import { FabScrollUpButton } from './fab.style';
import { IoIosArrowUp } from 'react-icons/io/';
import { useScrollTrigger, Zoom } from '@mui/material';

export const ScrollUpButton: React.FC = () => {
  let trigger = false;

  if (typeof window !== 'undefined')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    trigger = useScrollTrigger({
      target: window ? window : undefined,
      disableHysteresis: true,
      threshold: window.innerHeight * 0.5
    });

  return (
    <Zoom in={trigger}>
      <FabScrollUpButton
        // style={{ color: '#fff', background: 'rgb(32, 35, 42)' }}
        color="default"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      >
        <IoIosArrowUp />
      </FabScrollUpButton>
    </Zoom>
  );
};
