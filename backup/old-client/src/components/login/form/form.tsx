import React from 'react';
import { Form, Formik } from 'formik';
import { MdLockOutline, MdMailOutline } from 'react-icons/md';
import { SubmitWideButton } from 'src/components/common/button/submit-wide-button';
import { schemaLogin } from './schema';
import { initialValuesLogin } from './initial-values.constant';
import { TextFieldset } from 'src/components/common/fields/fieldset/text';
import { PasswordFieldset } from 'src/components/common/fields/fieldset/password';
import { useLogin } from './use-login.hook';
import { LoginVariables } from './__generated__/Login';

export const FormLogin: React.FC = () => {
  const [mutate, { loading }] = useLogin();

  const onSubmit = (variables: LoginVariables): void => {
    mutate({ variables });
  };
  return (
    <Formik<LoginVariables>
      validationSchema={schemaLogin}
      initialValues={initialValuesLogin}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
            <TextFieldset
              icon={MdMailOutline}
              name="email"
              type="email"
              placeholder="i.e. example@example.com"
            />
            <PasswordFieldset
              icon={MdLockOutline}
              name="password"
              placeholder="i.e. example@!%$5475347"
            />
            <SubmitWideButton text="Sign In" inProgress={loading} />
          </Form>
        );
      }}
    </Formik>
  );
};
