import React from 'react';
import { LinkAlternativeLogin } from '../link.style';
import { WrapperRecoveryAlternativeLogin } from './wrapper.style';

export const RecoveryAlternativeLogin: React.FC = () => {
  return (
    <WrapperRecoveryAlternativeLogin>
      <LinkAlternativeLogin href="/password-recovery">Forgot password?</LinkAlternativeLogin>
    </WrapperRecoveryAlternativeLogin>
  );
};
