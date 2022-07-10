import Link from 'next/link';
import React from 'react';
import { LandingFooterItemLink, LandingFooterItemWrapper } from './landing-footer-item.styled';

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
