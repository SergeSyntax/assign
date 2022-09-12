import { useScrollTrigger, Zoom } from '@mui/material';
import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { About } from './about';
import { Features } from './features';
import { LandingFooter } from './landing-footer/landing-footer';
import { LandingHeader } from './landing-header';
import { ScrollUpButtonFab } from './scroll-up-button-fab.styled';

const SCROLL_POSITION = 0;

export const Landing: React.FC = () => {
  const trigger = useScrollTrigger();

  // const trigger =
  //   useScrollTrigger({
  //     target: typeof window !== 'undefined' ? window : undefined,
  //     disableHysteresis: true,
  //     threshold: window?.innerHeight * 0.5,
  //   }) || false;

  return (
    <>
      <LandingHeader />
      <About />
      <Features />
      <LandingFooter />
      <Zoom in={trigger}>
        <ScrollUpButtonFab
          color="default"
          onClick={() => window.scrollTo({ behavior: 'smooth', top: SCROLL_POSITION })}
        >
          <IoIosArrowUp />
        </ScrollUpButtonFab>
      </Zoom>
    </>
  );
};
