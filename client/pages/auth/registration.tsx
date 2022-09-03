import { NextPage } from 'next';
import { SEO } from 'src';
import { useInitializeAuth } from 'src/auth/auth.hook';
import { OpenAuth } from 'src/auth/open-auth';
import {
  RegistrationContainer,
  RegistrationHeader,
  RegistrationLinks,
  RegistrationSignature,
  RegistrationWrapper,
  RegistrationForm,
} from 'src/auth/registration';

const RegistrationPage: NextPage = () => {
  useInitializeAuth();

  return (
    <>
      <SEO title="Registration" description="create an account for Assign" />
      <RegistrationWrapper>
        <RegistrationHeader />
        <RegistrationContainer>
          <OpenAuth />
          <RegistrationForm />
          <RegistrationLinks />
        </RegistrationContainer>
        <RegistrationSignature />
      </RegistrationWrapper>
    </>
  );
};

export default RegistrationPage;
