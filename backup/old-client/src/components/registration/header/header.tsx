import React from 'react';
import { LogoHeaderRegistration } from './logo.style';
import { TextHeaderRegistration } from './text.style';
import { WrapperHeaderRegistration } from './wrapper.style';

export const HeaderRegistration: React.FC = () => {
  return (
    <WrapperHeaderRegistration>
      <LogoHeaderRegistration />
      <TextHeaderRegistration>make most of your teamwork!</TextHeaderRegistration>
    </WrapperHeaderRegistration>
  );
};
