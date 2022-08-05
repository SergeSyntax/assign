import { NextPage } from 'next';
import { Registration } from '../src/auth/registration';
import { SEO } from '../src/common/seo';

const RegistrationPage: NextPage = () => {
  return (
    <>
      <SEO title="Registration" description="create an account for Assign" />
      <Registration />
    </>
  );
};

export default RegistrationPage;
