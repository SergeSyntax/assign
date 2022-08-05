import { Dialog, ListItemIcon, MenuItem } from '@mui/material';
import React, { Fragment } from 'react';
import { GoX } from 'react-icons/go';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';
import { useDialog } from 'src/components/common/dialog.hook';
import { ContentDeleteProject } from './content';
import { FormDeleteProject } from './form';
import { HeaderDeleteProject } from './header';

interface Props {
  onClick: () => void;
  project: ProjectRes;
}

export const DeleteProject: React.FC<Props> = ({ onClick, project }) => {
  const { open, handleOpen, handleClose, handleTabPropagation } = useDialog(false, onClick);
  return (
    <Fragment>
      <MenuItem onClick={handleOpen}>
        <ListItemIcon>
          <GoX />
        </ListItemIcon>
        Delete
      </MenuItem>
      <Dialog maxWidth="sm" open={open} onClose={handleClose} onKeyDown={handleTabPropagation}>
        <HeaderDeleteProject handleClose={handleClose} />
        <ContentDeleteProject projectTitle={project.title as string} />
        <FormDeleteProject project={project} handleClose={handleClose} />
      </Dialog>
    </Fragment>
  );
};
