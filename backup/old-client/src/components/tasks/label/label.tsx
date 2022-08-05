import { capitalize } from '@mui/material';
import React from 'react';
import { IconType } from 'react-icons';
import { IconLabelTask } from './icon';
import { TitleLabelTask } from './title';
import { WrapperLabelTask } from './wrapper';

interface Props {
  icon: IconType;
  label: string;
  name: string;
}

export const LabelTask: React.FC<Props> = ({ icon: Icon, label, name, ...rest }) => {
  return (
    <WrapperLabelTask htmlFor={name} {...rest}>
      <IconLabelTask>
        <Icon />
      </IconLabelTask>
      <TitleLabelTask>{capitalize(label)}</TitleLabelTask>
    </WrapperLabelTask>
  );
};
