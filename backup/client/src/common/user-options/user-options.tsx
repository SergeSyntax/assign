import { ListItemIcon, MenuItem } from '@mui/material';
import React, { Fragment } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDropdown } from '../dropdown.hook';
import { formatUserInfo } from './format-user-info.util';
import { useProfile } from './profile.hook';
import { UserOptionsButton } from './user-options-button';
import { UserOptionsMenu } from './user-options-menu.styled';

export const UserOptions: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();
  const { data, loading } = useProfile();

  return (
    <Fragment>
      <UserOptionsButton
        onClick={openDropdown}
        letter={loading ? '' : formatUserInfo(data?.profile).letter}
        src={data?.profile?.image ?? ''}
      />
      <UserOptionsMenu
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
        <MenuItem
          onClick={() => {
            location.replace('/api/logout');
          }}
        >
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </UserOptionsMenu>
    </Fragment>
  );
};
