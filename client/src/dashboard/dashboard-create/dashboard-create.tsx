import React, { Fragment } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiMailSendLine } from 'react-icons/ri';
import { CreateButton } from './create-button';
import { MenuCreate } from './project-create/menu-create.style';
import { MenuItem } from '@mui/material';
import { ProjectCreate } from './project-create';
import { useDropdown } from 'src/common/dropdown.hook';
import { BiLayerPlus } from 'react-icons/bi';

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
        <MenuItem>
          <BiLayerPlus /> New Project
        </MenuItem>
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
