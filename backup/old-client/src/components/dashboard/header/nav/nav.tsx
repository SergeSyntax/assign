import React from 'react';
import { WrapperNavDashboard } from './wrapper.styled';
import { useRouter } from 'next/router';
import { navTabs } from './nav-tabs.constant';
import { ItemNav } from './item-nav';

const style: React.CSSProperties = {
  background: '#6d6464'
};

export const NavDashboard: React.FC = () => {
  const { pathname } = useRouter();
  const value = navTabs.findIndex(tab => tab.href === pathname);
  const tabs = navTabs.map((tab, index) => <ItemNav key={index} index={index} {...tab} />);

  return (
    <WrapperNavDashboard value={value} TabIndicatorProps={{ style }} centered>
      {tabs}
    </WrapperNavDashboard>
  );
};
