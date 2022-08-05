import { Field } from 'formik';
import React, { Fragment } from 'react';
import { Label } from '../label';
import { TextField } from '../text';
import { FieldsetProps } from './FieldsetProps.interface';

export const TextFieldset: React.FC<FieldsetProps> = ({ icon, name, label, ...rest }) => {
  return (
    <Fragment>
      <Label icon={icon} htmlFor={label ? label : name} name={name} />
      <Field {...rest} name={name} component={TextField} />
    </Fragment>
  );
};
