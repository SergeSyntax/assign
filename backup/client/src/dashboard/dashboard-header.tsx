import { Container, Grid } from '@mui/material';
import React from 'react';
import { DashboardAppBar } from './dashboard-app-bar.styled';
import { DashboardCreate } from './dashboard-create';
import { DashboardLogo } from './dashboard-logo.style';
import { DashboardNav } from './dashboard-nav';
import { DashboardSearch } from './dashboard-search';

import { DashboardToolbar } from './dashboard-toolbar.styled';
import { UserOptions } from '../common/user-options';

interface DashboardHeaderProps {}

export const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
  return (
    <DashboardAppBar position="static" elevation={0} variant="outlined" color="default">
      <Container maxWidth="lg">
        <DashboardToolbar>
          <Grid container direction="row" wrap="nowrap">
            <DashboardLogo />
            <DashboardSearch />
          </Grid>
          <DashboardNav />
          <Grid container direction="row" justifyContent="flex-end" wrap="nowrap">
            <DashboardCreate />
            <UserOptions />
          </Grid>
        </DashboardToolbar>
      </Container>
    </DashboardAppBar>
  );
};
