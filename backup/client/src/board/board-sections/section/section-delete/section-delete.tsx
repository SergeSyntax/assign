import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { GoX } from 'react-icons/go';
import { useDeleteSection } from './delete-section.hook';

interface SectionDeleteProps {
  closeDropdown: () => void;
  sectionId: string;
}

export const SectionDelete: React.FC<SectionDeleteProps> = ({ sectionId, closeDropdown }) => {
  const { deleteSection } = useDeleteSection(sectionId);

  const handleDeleteSection = async () => {
    await deleteSection();
    closeDropdown();
  };

  return (
    <MenuItem onClick={handleDeleteSection}>
      <ListItemIcon>
        <GoX />
      </ListItemIcon>
      Delete
    </MenuItem>
  );
};
