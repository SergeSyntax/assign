import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { WrapperFilterProject } from './wrapper';
import { FiFolder, FiArchive, FiStar, FiPackage } from 'react-icons/fi';

interface Props {}

export const FilterProject: React.FC<Props> = () => {
  return (
    <WrapperFilterProject as="div">
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
    </WrapperFilterProject>
  );
};
