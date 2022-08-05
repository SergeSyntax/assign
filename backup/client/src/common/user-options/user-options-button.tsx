import React from 'react';
import { UserAvatar } from './user-avatar.styled';
import { UserOptionsMenuButton } from './user-options-button-wrapper.styled';

interface UserOptionsButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  letter?: string | null;
  src: string;
}

export const UserOptionsButton: React.FC<UserOptionsButtonProps> = ({ letter, onClick, src }) => {
  return (
    <UserOptionsMenuButton color="inherit" onClick={onClick}>
      <UserAvatar src={src}>{letter}</UserAvatar>
    </UserOptionsMenuButton>
  );
};
