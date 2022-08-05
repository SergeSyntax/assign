import React from 'react';
import { SubTitleHeaderLogin } from './sub.style';
import { MainTitleHeaderLogin } from './main.style';
import { LoginHeaderTitleWrapper } from './wrapper.style';

export const TitleHeaderLogin: React.FC = () => {
  return (
    <LoginHeaderTitleWrapper>
      <MainTitleHeaderLogin>Welcome Back!</MainTitleHeaderLogin>
      <SubTitleHeaderLogin>
        <span>Ready to get your team on track?</span>
        <span>Then don&apos;t delay organize and prioritize your project</span>
        <span>with Assign?</span>
      </SubTitleHeaderLogin>
    </LoginHeaderTitleWrapper>
  );
};
