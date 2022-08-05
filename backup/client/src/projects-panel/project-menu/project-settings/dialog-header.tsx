import React from 'react';
import { Typography } from '@mui/material';
import { DialogHeaderWrapper } from './dialog-header-wrapper.styled';
import { CloseButton } from './close-button.styled';
import { MdClose } from 'react-icons/md';
interface Props {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

export const DialogHeader: React.FC<Props> = ({ handleClose, title }) => {
  return (
    <DialogHeaderWrapper>
      <Typography variant="h6" component="span">
        {title}
      </Typography>
      <CloseButton aria-label="close" onClick={handleClose}>
        <MdClose />
      </CloseButton>
    </DialogHeaderWrapper>
  );
};
