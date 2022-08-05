import React from 'react';
import { IconType } from 'react-icons/lib';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import { ButtonPasswordLabel } from './button.style';
import { IconLabel } from '../../label/icon.style';
import { WrapperLabel } from '../../label/wrapper.style';

interface Props {
  htmlFor: string;
  name: string;
  icon: IconType;
  isHidden: boolean;
  setIsHidden: () => void;
}

export const PasswordLabel: React.FC<Props> = ({
  name,
  htmlFor,
  children,
  icon,
  isHidden,
  setIsHidden
}) => {
  return (
    <WrapperLabel htmlFor={htmlFor}>
      <IconLabel component={icon} />
      <span>{name}</span>
      <ButtonPasswordLabel onClick={setIsHidden}>
        {isHidden ? <IoEyeOffSharp /> : <IoEyeSharp />}
      </ButtonPasswordLabel>
      {children}
    </WrapperLabel>
  );
};
