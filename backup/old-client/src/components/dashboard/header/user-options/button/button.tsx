import React from 'react';
import { IconButtonUserOptions } from './icon';
import { WrapperButtonUserOptions } from './wrapper';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  letter: string | null;
}

export const ButtonUserOptions: React.FC<Props> = ({ onClick, letter }) => {
  return (
    <WrapperButtonUserOptions color="inherit" onClick={onClick}>
      <IconButtonUserOptions>{letter}</IconButtonUserOptions>
    </WrapperButtonUserOptions>
  );
};
