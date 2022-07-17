import _ from 'lodash';
import React from 'react';
import { LabelIcon, LabelWrapper } from './label.styled';

interface LabelProps {
  htmlFor: string;
  name: string;
  label?: string;
  icon: React.ComponentType;
  children: React.ReactElement;
}

const startCase = (value: string) => _.startCase(value.toLocaleLowerCase());

export const Label: React.FC<LabelProps> = ({ name, label, htmlFor, children, icon, ...rest }) => {
  return (
    <LabelWrapper {...rest} htmlFor={htmlFor}>
      <LabelIcon component={icon} />
      <span>{startCase(label ?? name)}</span>
      {children}
    </LabelWrapper>
  );
};
