import React, { Fragment } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { CreateButton } from './create-button';
import { MenuCreate } from './project-create/menu-create.style';
import { MenuItem } from '@mui/material';
import { useDropdown } from '../../common/dropdown.hook';
import { ProjectCreate } from './project-create';

export const DashboardCreate: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();

  return (
    <Fragment>
      <CreateButton onClick={openDropdown} />

      <MenuCreate
        id="simple-menu"
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ProjectCreate closeDropdown={closeDropdown} />
        <MenuItem>
          <AiOutlineUsergroupAdd />
          New Team
        </MenuItem>
        <MenuItem>
          <RiMailSendLine />
          New Chat
        </MenuItem>
      </MenuCreate>
    </Fragment>
  );
};
