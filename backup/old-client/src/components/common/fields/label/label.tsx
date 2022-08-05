import React from 'react';
import { IconType } from 'react-icons/lib';
import { IconLabel } from './icon.style';
import { WrapperLabel } from './wrapper.style';

interface Props {
  htmlFor: string;
  name: string;
  icon: IconType;
}

export const Label: React.FC<Props> = ({ name, htmlFor, children, icon, ...rest }) => {
  return (
    <WrapperLabel {...rest} htmlFor={htmlFor}>
      <IconLabel component={icon} />
      <span>{name}</span>
      {children}
    </WrapperLabel>
  );
};
