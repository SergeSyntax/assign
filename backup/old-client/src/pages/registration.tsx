import React from 'react';

import { NextPage } from 'next';

import { WrapperRegistration } from 'src/components/registration/wrapper.style';
import { SEO } from 'src/components/common/seo';
import { HeaderRegistration } from 'src/components/registration/header/header';
import { DocumentRegistration } from 'src/components/registration/document';
import { SignatureRegistration } from 'src/components/registration/signature.style';

const Registration: NextPage = () => {
  return (
    <WrapperRegistration>
      <SEO title="Registration" description="create an account for Assign" />
      <HeaderRegistration />
      <DocumentRegistration />
      <SignatureRegistration />
    </WrapperRegistration>
  );
};

export default Registration;
