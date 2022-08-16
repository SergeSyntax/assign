import Link from 'next/link';
import React from 'react';
import {
  LandingHeaderActions,
  LandingHeaderButtonPrimary,
  LandingHeaderButtonSecondary,
  LandingHeaderLogo,
  LandingHeaderTitleMain,
  LandingHeaderTitleSub,
  LandingHeaderTitleWrapper,
  LandingHeaderWrapper,
} from './landing-header.styled';
import { DownButton } from './down-button.styled';

export const LandingHeader: React.FC = () => {
  const handleDownButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.blur();
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <LandingHeaderWrapper>
      <LandingHeaderLogo />
      <LandingHeaderTitleWrapper>
        <LandingHeaderTitleMain>assign your team</LandingHeaderTitleMain>
        <LandingHeaderTitleSub>to the right direction</LandingHeaderTitleSub>
      </LandingHeaderTitleWrapper>
      <LandingHeaderActions>
        <Link passHref href="/auth/registration">
          <LandingHeaderButtonPrimary variant="contained">join now</LandingHeaderButtonPrimary>
        </Link>
        <Link passHref href="/auth/login">
          <LandingHeaderButtonSecondary variant="outlined">sign in</LandingHeaderButtonSecondary>
        </Link>
      </LandingHeaderActions>
      <DownButton aria-label="Scroll down button" onClick={handleDownButtonClick} type="button" />
    </LandingHeaderWrapper>
  );
};
