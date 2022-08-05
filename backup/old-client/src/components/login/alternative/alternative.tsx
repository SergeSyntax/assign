import React, { Fragment } from 'react';
import { RecoveryAlternativeLogin } from './recovery';
import RegisterAlternativeLogin from './register/register';

export const AlternativeLogin: React.FC = () => {
  return (
    <Fragment>
      <RecoveryAlternativeLogin />
      <RegisterAlternativeLogin />
    </Fragment>
  );
};
