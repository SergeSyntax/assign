import { NextPage } from 'next';
import { SEO } from 'src';
import { LoginContainer, LoginForm, LoginHeader, LoginLinks, LoginWrapper } from 'src/auth/login';
import { OpenAuth } from 'src/auth/open-auth';

const LoginPage: NextPage = () => {
  return (
    <>
      <SEO title="Sign In" description="Sign into Assign." />
      <LoginWrapper>
        <LoginHeader />
        <LoginContainer maxWidth="xs">
          <OpenAuth />
          <LoginForm />
        </LoginContainer>
        <LoginLinks />
      </LoginWrapper>
    </>
  );
};

export default LoginPage;
