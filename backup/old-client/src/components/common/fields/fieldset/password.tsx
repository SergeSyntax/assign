import { Field } from 'formik';
import React, { Fragment, useState } from 'react';
import { PasswordLabel } from '../label/password';
import { TextField } from '../text';
import { FieldsetProps } from './FieldsetProps.interface';

export const PasswordFieldset: React.FC<FieldsetProps> = ({ icon, name, label, ...rest }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Fragment>
      <PasswordLabel
        icon={icon}
        htmlFor={label ? label : name}
        name={name}
        isHidden={isHidden}
        setIsHidden={() => setIsHidden(prevValue => !prevValue)}
      />
      <Field {...rest} name={name} type={isHidden ? 'password' : 'text'} component={TextField} />
    </Fragment>
  );
};
