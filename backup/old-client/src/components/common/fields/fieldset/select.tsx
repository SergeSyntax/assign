import { Field } from 'formik';
import React, { Fragment } from 'react';
import { IconType } from 'react-icons/lib';
import { Label } from '../label';
import { SelectField, SelectOptions } from '../select';

export interface SelectProps {
  icon: IconType;
  name: string;
  label?: string;
  helperText?: string;
  values: SelectOptions[];
}

export const SelectFieldset: React.FC<SelectProps> = ({ icon, name, label, ...rest }) => {
  return (
    <Fragment>
      <Label icon={icon} htmlFor={label ? label : name} name={name} />
      <Field {...rest} name={name} component={SelectField} />
    </Fragment>
  );
};
