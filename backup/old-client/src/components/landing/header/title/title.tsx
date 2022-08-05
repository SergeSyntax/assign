import React from 'react';
import { MainTitleHeaderLanding } from './main.style';
import { SubTitleHeaderLanding } from './sub.style';
import { WrapperTitleHeaderLanding } from './wrapper.style';

export const TitleHeaderLanding: React.FC = () => {
  return (
    <WrapperTitleHeaderLanding>
      <MainTitleHeaderLanding>assign your team</MainTitleHeaderLanding>
      <SubTitleHeaderLanding>to the right direction</SubTitleHeaderLanding>
    </WrapperTitleHeaderLanding>
  );
};
