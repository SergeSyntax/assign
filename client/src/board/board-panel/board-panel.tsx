import React from 'react';
import { BoardList } from './board-list';
import { ProjectsPanelFilter } from './projects-panel-filter';
import { ProjectsPanelFilterWrapper, ProjectsPanelWrapper } from './board-panel.styled';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FiFolder, FiArchive, FiStar, FiPackage } from 'react-icons/fi';

export const ProjectsPanel: React.FC = () => {
  return (
    <ProjectsPanelWrapper>
      <ProjectsPanelFilterWrapper as="div">
        <ListItemButton>
          <ListItemIcon>
            <FiFolder />
          </ListItemIcon>
          <ListItemText primary="All" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FiStar />
          </ListItemIcon>
          <ListItemText primary="Favorite" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FiPackage />
          </ListItemIcon>
          <ListItemText primary="Collection" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FiArchive />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemButton>
      </ProjectsPanelFilterWrapper>
      <BoardList />
    </ProjectsPanelWrapper>
  );
};
