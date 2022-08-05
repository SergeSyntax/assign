import { Menu } from '@mui/material';
import React from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { useDropdown } from '../../../common/dropdown.hook';
import { SectionDelete } from './section-delete';
import { SectionMenuButton } from './section-menu-button.styled';

interface SectionMenuProps {
  sectionId: string;
}

export const SectionMenu: React.FC<SectionMenuProps> = ({ sectionId }) => {
  const { dropdown, openDropdown, closeDropdown } = useDropdown();
  return (
    <>
      <SectionMenuButton size="small" icon={GoKebabHorizontal} onClick={openDropdown} />
      <Menu
        anchorEl={dropdown}
        keepMounted
        open={Boolean(dropdown)}
        onClose={closeDropdown}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SectionDelete closeDropdown={closeDropdown} sectionId={sectionId} />
      </Menu>
    </>
  );
};
