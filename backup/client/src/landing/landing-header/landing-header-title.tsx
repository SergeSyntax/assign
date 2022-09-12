import React from 'react';
import { LandingHeaderTitleMain } from './landing-header-title-main.styled';
import { LandingHeaderTitleSub } from './landing-header-title-sub.styled';
import { LandingHeaderTitleWrapper } from './landing-header-title-wrapper.styled';

export const LandingHeaderTitle: React.FC = () => {
  return (
    <LandingHeaderTitleWrapper>
      <LandingHeaderTitleMain>assign your team</LandingHeaderTitleMain>
      <LandingHeaderTitleSub>to the right direction</LandingHeaderTitleSub>
    </LandingHeaderTitleWrapper>
  );
};
