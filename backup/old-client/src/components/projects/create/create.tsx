import React, { Fragment } from 'react';
import { BiLayerPlus } from 'react-icons/bi';

import { Dialog } from './dialog.style';
import CreateProjectForm from './form';
import { useDialog } from 'src/components/common/dialog.hook';
import { DialogHeader } from 'src/components/common/layout/header-dialog';
import { DialogContent, MenuItem } from '@mui/material';

interface Props {
  onClick: () => void;
}

const CreateProject: React.FC<Props> = ({ onClick }) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);

  return (
    <Fragment>
      <MenuItem onClick={handleOpen}>
        <BiLayerPlus /> New Project
      </MenuItem>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        onKeyDown={handleTabPropagation}
      >
        <DialogHeader title="Create Project" handleClose={handleClose} />
        <DialogContent>
          <CreateProjectForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateProject;
