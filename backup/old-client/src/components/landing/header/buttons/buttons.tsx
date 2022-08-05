import React from 'react';
import Link from 'next/link';
import { PrimaryButtonsHeaderLanding } from './primary.style';
import { SecondaryButtonsHeaderLanding } from './secondary.style';
import { WrapperButtonsHeaderLanding } from './wrapper.style';

export const ButtonsHeaderLanding: React.FC = () => {
  return (
    <WrapperButtonsHeaderLanding>
      <Link passHref href="/registration">
        <PrimaryButtonsHeaderLanding variant="contained">join now</PrimaryButtonsHeaderLanding>
      </Link>
      <Link passHref href="/login">
        <SecondaryButtonsHeaderLanding variant="outlined">sign in</SecondaryButtonsHeaderLanding>
      </Link>
    </WrapperButtonsHeaderLanding>
  );
};
