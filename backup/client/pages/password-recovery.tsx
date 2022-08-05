import { NextPage } from 'next';
import { PasswordRecovery } from '../src/auth/password-recovery';
import { SEO } from '../src/common/seo';

const PasswordRecoveryPage: NextPage = () => (
  <>
    <SEO title="Password Recovery" description="Reset your assign password." />
    <PasswordRecovery />
  </>
);

export default PasswordRecoveryPage;
