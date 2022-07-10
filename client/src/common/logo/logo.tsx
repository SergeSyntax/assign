import React from 'react';
import { LogoIcon, LogoText, LogoWrapper } from './logo.styled';

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
