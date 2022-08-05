import React from 'react';
import { WrapperHeaderLanding } from './wrapper.style';
import { TitleHeaderLanding } from './title';
import { ScrollDownButton } from './scroll-down-button';
import { LogoHeaderLanding } from './logo.style';
import { ButtonsHeaderLanding } from './buttons';

export const HeaderLanding: React.FC = () => {
  return (
    <WrapperHeaderLanding>
      <LogoHeaderLanding />
      <TitleHeaderLanding />
      <ButtonsHeaderLanding />
      <ScrollDownButton />
    </WrapperHeaderLanding>
  );
};
