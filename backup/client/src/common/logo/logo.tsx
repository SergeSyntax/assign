import React from 'react';
import { LogoIcon } from './logo-icon.styled';
import { LogoText } from './logo-text.styled';
import { LogoWrapper } from './logo-wrapper.styled';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <LogoWrapper className={className}>
      <LogoIcon />
      <LogoText>Assign</LogoText>
    </LogoWrapper>
  );
};
