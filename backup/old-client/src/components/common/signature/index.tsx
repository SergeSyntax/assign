import React from 'react';
import { IconSignature } from './icon.style';
import { TextSignature } from './text.style';

export const Signature: React.FC = props => {
  return (
    <TextSignature {...props}>
      &copy; Sergway Khodyachikh <IconSignature />
    </TextSignature>
  );
};
