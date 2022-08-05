import React, { Fragment } from 'react';
import { MenuCloseButton } from './menu-close-button.styled';
import { GoKebabVertical, GoX } from 'react-icons/go';
import { useDropdown } from '../../common/dropdown.hook';
import { Menu } from '@mui/material';
import { ProjectItemProps } from '../project-item';
import { ProjectDelete } from './project-delete';
import { ProjectMenuItemProps } from './project-menu-item-props.interface';
import { ProjectSettings } from './project-settings/project-settings';

interface ProjectItemMenuProps extends ProjectItemProps {}

export const ProjectItemMenu: React.FC<ProjectItemMenuProps> = ({ project }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();

  const commonProps: ProjectMenuItemProps = { project, closeDropdown };

  return (
    <Fragment>
      <MenuCloseButton onClick={openDropdown}>
        <GoKebabVertical />
      </MenuCloseButton>

      <Menu
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <ProjectDelete {...commonProps} />
        <ProjectSettings {...commonProps} />
      </Menu>
    </Fragment>
  );
};
