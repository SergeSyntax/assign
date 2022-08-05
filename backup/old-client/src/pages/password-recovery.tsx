import React from 'react';

import { NextPage } from 'next';

import { WrapperPasswordRecovery } from 'src/components/password-recovery/wrapper.style';
import { SEO } from 'src/components/common/seo';
import { DocumentPasswordRecovery } from 'src/components/password-recovery/document';
import { LogoPasswordRecovery } from 'src/components/password-recovery/logo.style';

const PasswordRecovery: NextPage = () => (
  <WrapperPasswordRecovery>
    <SEO title="Password Recovery" description="Reset your assign password." />
    <LogoPasswordRecovery />
    <DocumentPasswordRecovery />
  </WrapperPasswordRecovery>
);

export default PasswordRecovery;
