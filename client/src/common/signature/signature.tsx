import React from 'react';
import { SignatureIcon, SignatureText } from './signature.style';

export const Signature: React.FC = (props) => {
  return (
    <SignatureText {...props}>
      &copy; Sergway Khodyachikh <SignatureIcon />
    </SignatureText>
  );
};
