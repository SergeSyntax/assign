import React from 'react';

import { NextPage } from 'next';

import { WrapperLogin } from 'src/components/login/wrapper.style';
import { SEO } from 'src/components/common/seo';
import { HeaderLogin } from 'src/components/login/header';
import { DocumentLogin } from 'src/components/login/document';
import { AlternativeLogin } from 'src/components/login/alternative';

const Login: NextPage = () => (
  <WrapperLogin>
    <SEO title="Sign In" description="Sign into Assign." />
    <HeaderLogin />
    <DocumentLogin />
    <AlternativeLogin />
  </WrapperLogin>
);

export default Login;
