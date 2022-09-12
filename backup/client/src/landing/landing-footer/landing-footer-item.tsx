import Link from 'next/link';
import React from 'react';
import { LandingFooterItemLink } from './landing-footer-item-link.styled';
import { LandingFooterItemWrapper } from './landing-footer-item-wrapper.styled';

export interface LandingFooterItemProps {
  title: string;
  path: string;
}

export const LandingFooterItem: React.FC<LandingFooterItemProps> = ({ title, path }) => {
  return (
    <LandingFooterItemWrapper>
      <Link passHref href={path}>
        <LandingFooterItemLink>{title} </LandingFooterItemLink>
      </Link>
    </LandingFooterItemWrapper>
  );
};
