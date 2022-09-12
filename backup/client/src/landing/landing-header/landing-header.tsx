import Link from 'next/link';
import React from 'react';
import { LandingHeaderWrapper } from '../landing-header-wrapper.styled';
import { DownButton } from './down-button.style';
import { LandingHeaderActions } from './landing-header-actions.styled';
import { LandingHeaderButtonPrimary } from './landing-header-button-primary.styled';
import { LandingHeaderButtonSecondary } from './landing-header-button-secondary.styled';
import { LandingHeaderLogo } from './landing-header-logo.styled';
import { LandingHeaderTitle } from './landing-header-title';

export const LandingHeader: React.FC = () => {
  return (
    <LandingHeaderWrapper>
      <LandingHeaderLogo />
      <LandingHeaderTitle />
      <LandingHeaderActions>
        <Link passHref href="/registration">
          <LandingHeaderButtonPrimary variant="contained">join now</LandingHeaderButtonPrimary>
        </Link>
        <Link passHref href="/login">
          <LandingHeaderButtonSecondary variant="outlined">sign in</LandingHeaderButtonSecondary>
        </Link>
      </LandingHeaderActions>
      <DownButton
        onClick={(e) => {
          e.currentTarget.blur();
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }}
      />
    </LandingHeaderWrapper>
  );
};
