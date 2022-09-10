import { Container, Grid } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { MdHome, MdLayers, MdListAlt, MdPeople } from 'react-icons/md';

import {
  DashboardAppBar,
  DashboardLogo,
  DashboardToolbar,
  Tab,
  tabIndicatorProps,
  Tabs,
} from './dashboard-header.styled';
import { DashboardCreate } from '../dashboard-create';
import { DashboardSearch } from '../dashboard-search';
import { UserOptions } from '../user-options';
import { useGetCurrentTabValue } from './dashboard-header.hook';

// import { UserOptions } from '../common/user-options';

interface DashboardNavTabProps {
  href: string;
  label: string;
  icon: IconType;
}

const DASHBOARD_NAV_TABS = Object.freeze<DashboardNavTabProps[]>([
  { href: '/dashboard', label: 'Home', icon: MdHome },
  { href: '/dashboard/teams', label: 'Teams', icon: MdPeople },
  { href: '/dashboard/projects', label: 'Projects', icon: MdLayers },
  { href: '/dashboard/documents', label: 'Documents', icon: MdListAlt },
]);

const renderDashboardNavTab = ({ href, icon, label }: DashboardNavTabProps, index: number) => {
  return (
    <Link key={index} passHref href={href}>
      <Tab tabIndex={index} icon={React.createElement(icon)} label={label} />
    </Link>
  );
};

export const DashboardHeader: React.FC = () => {
  const navTabValue = useGetCurrentTabValue(DASHBOARD_NAV_TABS);

  return (
    <DashboardAppBar position="static" elevation={0} variant="outlined" color="default">
      <Container maxWidth="lg">
        <DashboardToolbar>
          <Grid container direction="row" wrap="nowrap">
            <DashboardLogo />
            <DashboardSearch />
          </Grid>
          <Tabs TabIndicatorProps={tabIndicatorProps} value={navTabValue}>
            {DASHBOARD_NAV_TABS.map(renderDashboardNavTab)}
          </Tabs>
          <Grid container direction="row" justifyContent="flex-end" wrap="nowrap">
            {/* <DashboardCreate /> */}
            <UserOptions />
          </Grid>
        </DashboardToolbar>
      </Container>
    </DashboardAppBar>
  );
};
