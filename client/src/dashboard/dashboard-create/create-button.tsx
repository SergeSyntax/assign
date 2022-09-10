import React from 'react';
import { MdAdd } from 'react-icons/md';
import { CreateButtonWrapper } from './create-button-wrapper.styled';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CreateButton: React.FC<Props> = ({ onClick }) => {
  return (
    <CreateButtonWrapper aria-controls="create-menu" aria-haspopup="true" onClick={onClick}>
      <MdAdd />
    </CreateButtonWrapper>
  );
};
