import { OpenAuth } from 'src/components/common/open-auth';
import React from 'react';
import { WrapperDocumentLogin } from './wrapper.style';
import { FormLogin } from '../form';

export const DocumentLogin: React.FC = () => {
  return (
    <WrapperDocumentLogin>
      {/* Open Authentication */}
      <OpenAuth />
      {/* Forum */}
      <FormLogin />
    </WrapperDocumentLogin>
  );
};
