import React from 'react';
import { LogoIcon } from './icon.style';
import { LogoText } from './text.style';
import LogoWrapper from './wrapper.style';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = props => {
  return (
    <LogoWrapper {...props}>
      <LogoIcon />
      <LogoText>Assign</LogoText>
    </LogoWrapper>
  );
};
