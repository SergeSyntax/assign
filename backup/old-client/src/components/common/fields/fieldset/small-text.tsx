import { Field } from 'formik';
import React, { Fragment } from 'react';
import { SmallLabel } from '../label/small';
import { SmallTextField } from '../text/small';
import { FieldsetProps } from './FieldsetProps.interface';

export const SmallTextFieldset: React.FC<FieldsetProps> = ({ icon, name, label, ...rest }) => {
  return (
    <Fragment>
      <SmallLabel icon={icon} htmlFor={label ? label : name} name={name} />
      <Field size="small" {...rest} name={name} component={SmallTextField} />
    </Fragment>
  );
};
