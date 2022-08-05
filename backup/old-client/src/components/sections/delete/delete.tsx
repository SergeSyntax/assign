import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { GoX } from 'react-icons/go';
import { useDeleteSection } from './use-delete-section.hook';

interface Props {
  closeDropdown: () => void;
  sectionId: string;
}

export const DeleteSection: React.FC<Props> = ({ closeDropdown, sectionId }) => {
  const [mutate, { loading }] = useDeleteSection(sectionId);

  return (
    <MenuItem
      onClick={async () => {
        await mutate();
        closeDropdown();
      }}
    >
      <ListItemIcon>
        <GoX />
      </ListItemIcon>
      Delete
    </MenuItem>
  );
};
