import React from 'react';
import FormPasswordRecovery from './form/form';
import { HeaderPasswordRecovery } from './header';
import { WrapperDocumentPasswordRecovery } from './wrapper.style';

export const DocumentPasswordRecovery: React.FC = () => (
  <WrapperDocumentPasswordRecovery>
    <HeaderPasswordRecovery />
    <FormPasswordRecovery />
  </WrapperDocumentPasswordRecovery>
);
