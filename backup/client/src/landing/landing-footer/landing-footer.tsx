import React from 'react';
import { Logo } from '../../common/logo';
import { LandingFooterItem } from './landing-footer-item';
import { LandingFooterMenuList } from './landing-footer-menu-list.styled';
import { LANDING_FOOTER_MENU } from './landing-footer-menu.const';
import { LandingFooterMenuWrapper } from './landing-footer-menu-wrapper.styled';
import { LandingFooterSignatureWrapper } from './landing-footer-signature-wrapper.styled';
import { LandingFooterSignature } from './landing-footer-signature.styled';

interface LandingFooterProps {}

export const LandingFooter: React.FC<LandingFooterProps> = () => {
  return (
    <>
      <LandingFooterMenuWrapper>
        <Logo />
        <LandingFooterMenuList>
          {LANDING_FOOTER_MENU.map((item) => (
            <LandingFooterItem key={item.title} {...item} />
          ))}
        </LandingFooterMenuList>
      </LandingFooterMenuWrapper>
      <LandingFooterSignatureWrapper>
        <LandingFooterSignature />
      </LandingFooterSignatureWrapper>
    </>
  );
};
