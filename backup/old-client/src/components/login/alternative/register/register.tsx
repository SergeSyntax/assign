import React from 'react';
import { LinkAlternativeLogin } from '../link.style';
import { WrapperRegisterAlternativeLogin } from './wrapper.style';

const RegisterAlternativeLogin: React.FC = () => {
  return (
    <WrapperRegisterAlternativeLogin>
      New to Assign?
      <LinkAlternativeLogin href="/registration">Join Now</LinkAlternativeLogin>
    </WrapperRegisterAlternativeLogin>
  );
};

export default RegisterAlternativeLogin;
