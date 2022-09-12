import { NextPage } from 'next';
import { Login } from '../src/auth/login';
import { SEO } from '../src/common/seo';

const LoginPage: NextPage = () => {
  return (
    <>
      <SEO title="Sign In" description="Sign into Assign." />
      <Login />
    </>
  );
};

export default LoginPage;
