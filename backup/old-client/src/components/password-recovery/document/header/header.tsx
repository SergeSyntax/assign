import { Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { MainHeaderPasswordRecovery } from './main.style';
import { SubHeaderPasswordRecovery } from './sub.style';

export const HeaderPasswordRecovery: React.FC = () => {
  return (
    <Fragment>
      <MainHeaderPasswordRecovery>Recover Password</MainHeaderPasswordRecovery>
      <Divider />
      <SubHeaderPasswordRecovery>
        <span>If you’ve lost or forgotten your password fill the next form</span>
        <span>to receive an email with a password recovery code.</span>
      </SubHeaderPasswordRecovery>
    </Fragment>
  );
};
