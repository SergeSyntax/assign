import React from 'react';
import { DashboardNavTab } from './dashboard-nav-tab';
import { DASHBOARD_NAV_TABS } from './dashboard-nav-tabs.constants';

export const DashboardNavTabs = DASHBOARD_NAV_TABS.map((tab, index) => (
  <DashboardNavTab key={index} {...tab} tabIndex={index} />
));
