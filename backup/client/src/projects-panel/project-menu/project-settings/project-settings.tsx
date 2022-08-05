import { Dialog, Divider, ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { useDialog } from '../../../common/dialog.hook';
import { ProjectMenuItemProps } from '../project-menu-item-props.interface';
import { DialogHeader } from './dialog-header';

interface ProjectSettingsProps extends ProjectMenuItemProps {}

export const ProjectSettings: React.FC<ProjectSettingsProps> = ({ project, closeDropdown }) => {
  const { open, openDialog, closeDialog, handleTabPropagation } = useDialog(false, closeDropdown);

  return (
    <>
      <MenuItem onClick={openDialog}>
        <ListItemIcon>
          <FiSettings />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Dialog
        maxWidth="md"
        fullWidth
        open={open}
        onClose={closeDialog}
        onKeyDown={handleTabPropagation}
      >
        <DialogHeader title="Settings" handleClose={closeDialog} />
        <Divider orientation="horizontal" />
        <div>content</div>
      </Dialog>
    </>
  );
};
