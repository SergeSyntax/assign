import { IconButtonProps } from '@mui/material';
import React from 'react';
import { IconType } from 'react-icons';
import { IconButtonWrapper } from './icon-button-wrapper.styled';

interface IconButtonPropsExtended extends IconButtonProps {
  icon: IconType;
}

export const IconButton: React.FC<IconButtonPropsExtended> = ({ icon: Icon, ...rest }) => {
  return (
    <IconButtonWrapper {...rest}>
      <Icon />
    </IconButtonWrapper>
  );
};
