import { OpenAuth } from 'src/components/common/open-auth';
import React from 'react';
import { WrapperDocumentRegistration } from './wrapper.style';
import { ConditionDocumentRegistration } from './condition.style';
import { LoginOfferDocumentRegistration } from './login-offer';
import { RouteLink } from 'src/components/common/route-link';
import { FormDocumentRegistration } from '../form/form';

export const DocumentRegistration: React.FC = () => {
  return (
    <WrapperDocumentRegistration>
      {/* Open Authentication */}
      <OpenAuth />
      {/* Forum */}
      <FormDocumentRegistration />
      {/* Links to conditions and sign in page */}
      <ConditionDocumentRegistration>
        you agree to the
        <RouteLink href="/register">Privacy Policy</RouteLink>
        and
        <RouteLink href="/register">Terms of Use</RouteLink>
      </ConditionDocumentRegistration>

      <LoginOfferDocumentRegistration>
        already on assign?
        <RouteLink href="/login">sign in</RouteLink>
      </LoginOfferDocumentRegistration>
    </WrapperDocumentRegistration>
  );
};
