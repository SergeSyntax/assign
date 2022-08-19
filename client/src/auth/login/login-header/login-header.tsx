import React from 'react';
import {
  LoginHeaderLogo,
  LoginHeaderTitleWrapper,
  LoginHeaderTitleMain,
  LoginHeaderTitleSub,
  LoginHeaderWrapper,
} from './login-header.styled';

export const LoginHeader: React.FC = () => {
  return (
    <LoginHeaderWrapper>
      <LoginHeaderLogo />
      <LoginHeaderTitleWrapper>
        <LoginHeaderTitleMain>Welcome Back!</LoginHeaderTitleMain>
        <LoginHeaderTitleSub>
          <span>Ready to get your team on track?</span>
          <span>Then don&apos;t delay organize and prioritize your project</span>
          <span>with Assign?</span>
        </LoginHeaderTitleSub>
      </LoginHeaderTitleWrapper>
    </LoginHeaderWrapper>
  );
};
