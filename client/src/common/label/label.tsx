import _ from 'lodash';
import React from 'react';
import { LabelIcon, LabelWrapper, SmallLabelWrapper } from './label.styled';

interface LabelProps {
  htmlFor?: string;
  name: string;
  label?: string;
  icon: React.ComponentType;
  size?: 'small' | 'medium';
  children?: React.ReactElement;
}

const startCase = (value: string) => _.startCase(value.toLocaleLowerCase());

export const Label: React.FC<LabelProps> = ({ name, label, htmlFor, children, icon, size, ...rest }) => {
  const LabelWrapperWithSize = size === 'small' ? SmallLabelWrapper : LabelWrapper;

  return (
    <LabelWrapperWithSize {...rest} htmlFor={htmlFor ?? name}>
      <LabelIcon component={icon} />
      <span>{startCase(label ?? name)}</span>
      {children}
    </LabelWrapperWithSize>
  );
};

Label.defaultProps = {
  size: 'medium',
};
