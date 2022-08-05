import { Menu } from '@mui/material';
import React, { Fragment } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { useDropdown } from 'src/components/common/dropdown.hook';
import { DeleteSection } from '../delete';
import { ButtonMenuSection } from './button';

interface Props {
  sectionId: string;
}

export const MenuSection: React.FC<Props> = ({ sectionId }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown(null);

  return (
    <Fragment>
      <ButtonMenuSection size="small" icon={GoKebabHorizontal} onClick={openDropdown} />

      <Menu
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <DeleteSection closeDropdown={closeDropdown} sectionId={sectionId} />
      </Menu>
    </Fragment>
  );
};
