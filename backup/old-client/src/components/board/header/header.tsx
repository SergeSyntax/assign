import { Grid, Toolbar } from '@mui/material';
import React from 'react';
import { UserOptions } from 'src/components/dashboard/header/user-options';
import { LocationBoard } from '../location';
import { LogoBoard } from '../logo';
import { AppBarHeaderBoard } from './app-bar';
import { RowHeaderBoard } from './row';

interface Props {
  projectId: string;
}

export const HeaderBoard: React.FC<Props> = ({ projectId }) => {
  return (
    <AppBarHeaderBoard position="static">
      <Grid component={Toolbar} container direction="column">
        <RowHeaderBoard>
          <LogoBoard />
          <UserOptions />
        </RowHeaderBoard>
        <RowHeaderBoard>
          <LocationBoard projectId={projectId} />
          <div></div>
        </RowHeaderBoard>
      </Grid>
    </AppBarHeaderBoard>
  );
};
