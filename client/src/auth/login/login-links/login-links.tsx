import React from 'react';
import { Link } from 'src/common/link';
import { ForgotPasswordWrapper, RegisterLinkWrapper } from './login-links.styled';

export const LoginLinks: React.FC = () => {
  return (
    <>
      <ForgotPasswordWrapper>
        <Link href="/password-recovery">Forgot password?</Link>
      </ForgotPasswordWrapper>
      <RegisterLinkWrapper>
        New to Assign?
        <Link href="/registration">Join Now</Link>
      </RegisterLinkWrapper>
    </>
  );
};
