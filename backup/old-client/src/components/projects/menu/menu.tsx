import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { Fragment } from 'react';
import { FiArchive, FiStar } from 'react-icons/fi';
import { GoKebabVertical } from 'react-icons/go';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { DeleteProject } from '../delete/delete';
import { SettingsProject } from '../settings';

interface Props {
  project: ProjectRes;
}

export const MenuItemProject: React.FC<Props> = ({ project }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);

  return (
    <Fragment>
      <IconButton style={{ borderRadius: 0, padding: '2rem' }} onClick={openDropdown}>
        <GoKebabVertical />
      </IconButton>

      <Menu
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
      >
        <SettingsProject project={project} onClick={closeDropdown} />
        <MenuItem>
          <ListItemIcon>
            <FiStar />
          </ListItemIcon>
          Favorite
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <FiArchive />
          </ListItemIcon>
          Archive
        </MenuItem>
        <DeleteProject project={project} onClick={closeDropdown} />
      </Menu>
    </Fragment>
  );
};
