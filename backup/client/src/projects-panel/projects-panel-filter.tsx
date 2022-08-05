import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { ProjectsPanelFilterWrapper } from './projects-panel-filter-wrapper.styled';
import { FiFolder, FiArchive, FiStar, FiPackage } from 'react-icons/fi';

interface ProjectsPanelFilterProps {}

export const ProjectsPanelFilter: React.FC<ProjectsPanelFilterProps> = () => {
  return (
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
  );
};
