import React from 'react';
import { SignatureIcon } from './signature-icon.style';
import { SignatureText } from './signature-text.style';

export const Signature: React.FC = (props) => {
  return (
    <SignatureText {...props}>
      &copy; Sergway Khodyachikh <SignatureIcon />
    </SignatureText>
  );
};
