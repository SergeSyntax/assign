import React from 'react';
import { RegistrationHeaderTitle, RegistrationHeaderWrapper, RegistrationLogo } from './registration-header.styled';


export const RegistrationHeader:React.FC = () => {
  return (
  <RegistrationHeaderWrapper>
    <RegistrationLogo />
    <RegistrationHeaderTitle>make most of your teamwork!</RegistrationHeaderTitle>
  </RegistrationHeaderWrapper>
  );
};
