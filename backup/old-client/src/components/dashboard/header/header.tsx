import React from 'react';
import { AppBarDashboard } from './app-bar.styled';
import { ContainerHeaderDashboard } from './container.styled';
import { LogoDashboard } from './logo.style';
import SearchDashboard from './search/search';
import { NavDashboard } from './nav/nav';
import { Create } from './create';
import { UserOptions } from './user-options';
import { Grid, Toolbar } from '@mui/material';

const HeaderDashboard: React.FC = () => {
  return (
    <AppBarDashboard position="static" elevation={0} variant="outlined" color="default">
      <Toolbar>
        <ContainerHeaderDashboard maxWidth="lg">
          <Grid container direction="row" wrap="nowrap">
            <LogoDashboard />
            <SearchDashboard />
          </Grid>
          <NavDashboard />
          <Grid container direction="row" justifyContent="flex-end" wrap="nowrap">
            <Create />
            <UserOptions />
          </Grid>
        </ContainerHeaderDashboard>
      </Toolbar>
    </AppBarDashboard>
  );
};

export default HeaderDashboard;
