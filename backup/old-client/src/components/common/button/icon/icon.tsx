import { IconButtonProps } from '@mui/material';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { WrapperIconButton } from './wrapper';

interface Props extends IconButtonProps {
  icon: IconType;
}

export const IconButton: React.FC<Props> = ({ icon: Icon, ...rest }) => {
  return (
    <WrapperIconButton {...rest}>
      <Icon />
    </WrapperIconButton>
  );
};
