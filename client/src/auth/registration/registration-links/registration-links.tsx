import React from 'react';
import { Link } from 'src/common/link';
import { LoginLinkWrapper, RegistrationCondition } from './registration-links.styled';

interface RegistrationLinksProps {}

export const RegistrationLinks: React.FC<RegistrationLinksProps> = () => {
  return (
    <>
      <RegistrationCondition>
        you agree to the
        <Link href="#">Privacy Policy</Link>
        and
        <Link href="#">Terms of Use</Link>
      </RegistrationCondition>
      <LoginLinkWrapper>
        already on assign?
        <Link href="/auth/login">sign in</Link>
      </LoginLinkWrapper>
    </>
  );
};
