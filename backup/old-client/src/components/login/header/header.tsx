import React from 'react';
import { LogoHeaderLogin } from './logo.style';
import { WrapperHeaderLogin } from './wrapper.style';
import { TitleHeaderLogin } from './title';

export const HeaderLogin: React.FC = () => {
  return (
    <WrapperHeaderLogin>
      <LogoHeaderLogin />
      <TitleHeaderLogin />
    </WrapperHeaderLogin>
  );
};
