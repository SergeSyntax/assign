import React from 'react';
import { useRouter } from 'next/router';
import { DashboardNavTabs } from './dashboard-nav-tabs';
import { DASHBOARD_NAV_TABS } from './dashboard-nav-tabs.constants';
import { Tabs } from './tabs.style';

interface TabAttributes {
  href: string;
}

const tabIndicatorProps: React.HTMLAttributes<HTMLDivElement> = {
  style: {
    background: '#6d6464',
  },
};

const useGetCurrentTabValue = (tabs: readonly TabAttributes[]) => {
  const { pathname } = useRouter();
  return tabs.findIndex((tab) => tab.href === pathname);
};

export const DashboardNav: React.FC = () => {
  const value = useGetCurrentTabValue(DASHBOARD_NAV_TABS);

  return (
    <Tabs TabIndicatorProps={tabIndicatorProps} value={value}>
      {DashboardNavTabs}
    </Tabs>
  );
};
