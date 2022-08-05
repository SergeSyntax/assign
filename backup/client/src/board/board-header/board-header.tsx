import { Grid, Toolbar } from '@mui/material';
import React from 'react';
import { UserOptions } from '../../common/user-options';
import { BoardLocation } from '../board-location';
import { BoardLogo } from '../board-logo';
import { BoardHeaderAppBar } from './board-header-app-bar.styled';
import { BoardHeaderRow } from './board-header-row.styled';

interface BoardHeaderProps {
  projectId: string;
}

export const BoardHeader: React.FC<BoardHeaderProps> = ({ projectId }) => {
  return (
    <BoardHeaderAppBar>
      <Grid component={Toolbar} container direction="column">
        <BoardHeaderRow>
          <BoardLogo />
          <UserOptions />
        </BoardHeaderRow>
        <BoardHeaderRow>
          <BoardLocation projectId={projectId} />
          <div />
        </BoardHeaderRow>
      </Grid>
    </BoardHeaderAppBar>
  );
};
