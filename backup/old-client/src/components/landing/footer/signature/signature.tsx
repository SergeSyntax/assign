import React from 'react';
import { TextSignatureFooter } from './text.style';
import { WrapperSignatureFooter } from './wrapper.style';

export const FooterSignature: React.FC = () => {
  return (
    <WrapperSignatureFooter>
      <TextSignatureFooter />
    </WrapperSignatureFooter>
  );
};
