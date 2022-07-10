import React from 'react';
import { Logo } from '../../common/logo';
import { LandingFooterItem } from './landing-footer-item';
import { LANDING_FOOTER_MENU } from './landing-footer.const';
import {
  LandingFooterMenuList,
  LandingFooterMenuWrapper,
  LandingFooterSignature,
  LandingFooterSignatureWrapper,
} from './landing-footer.styled';

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
