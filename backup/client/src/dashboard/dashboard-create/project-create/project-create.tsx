import { DialogContent, MenuItem } from '@mui/material';
import React from 'react';
import { BiLayerPlus } from 'react-icons/bi';
import { DialogHeader } from './dialog-header';
import { useDialog } from '../../../common/dialog.hook';
import { MenuDialog } from './menu-dialog.styled';

import { ProjectCreateForm } from './project-create-form';

interface ProjectCreateProps {
  closeDropdown: () => void;
}

export const ProjectCreate: React.FC<ProjectCreateProps> = ({ closeDropdown }) => {
  const { open, openDialog, closeDialog, handleTabPropagation } = useDialog(false, closeDropdown);

  return (
    <>
      <MenuItem onClick={openDialog}>
        <BiLayerPlus /> New Project
      </MenuItem>

      <MenuDialog onClose={closeDialog} open={open} onKeyDown={handleTabPropagation}>
        <DialogHeader closeDialog={closeDialog} title="Create Project" />
        <DialogContent>
          <ProjectCreateForm closeDialog={closeDialog} />
        </DialogContent>
      </MenuDialog>
    </>
  );
};
