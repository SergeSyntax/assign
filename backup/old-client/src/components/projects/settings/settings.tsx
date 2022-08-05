import { Dialog, Divider, ListItemIcon, MenuItem } from '@mui/material';
import React, { Fragment } from 'react';
import { FiSettings } from 'react-icons/fi';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { useDialog } from 'src/components/common/dialog.hook';
import { DialogHeader } from 'src/components/common/layout/header-dialog';

interface Props {
  onClick: () => void;
  project: ProjectRes;
}

export const SettingsProject: React.FC<Props> = ({ onClick, project }) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);

  return (
    <Fragment>
      <MenuItem onClick={handleOpen}>
        <ListItemIcon>
          <FiSettings />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Dialog
        maxWidth="md"
        fullWidth
        open={open}
        onClose={handleClose}
        onKeyDown={handleTabPropagation}
      >
        <DialogHeader title="Settings" handleClose={handleClose} />
        <Divider orientation="horizontal" />
        <div>content</div>
      </Dialog>
    </Fragment>
  );
};
