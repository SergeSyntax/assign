import { ListItemIcon, MenuItem } from '@mui/material';
import React, { Fragment } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useUserData } from 'src/auth/auth.hook';
import { useDropdown } from '../../common/dropdown.hook';
import { getUserLetter } from './user-options.util';
import { UserAvatar, UserOptionsMenu, UserOptionsMenuButton } from './user-options.styled';

export const UserOptions: React.FC = () => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();
  const { currentUser, loading } = useUserData();

  return (
    <Fragment>
      <UserOptionsMenuButton color="inherit" onClick={openDropdown}>
        <UserAvatar src={currentUser?.image}>
          {loading ? '' : getUserLetter(currentUser!.email, currentUser?.name)}
        </UserAvatar>
      </UserOptionsMenuButton>

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
        {/* https://www.apollographql.com/docs/react/networking/authentication/#reset-store-on-logout */}
        <MenuItem onClick={() => location.replace('/api/logout')}>
          <ListItemIcon>
            <FiLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </UserOptionsMenu>
    </Fragment>
  );
};
