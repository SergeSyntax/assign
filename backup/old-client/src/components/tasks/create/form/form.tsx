import React from 'react';
import { Field, Form, Formik } from 'formik';
import { createSectionValidationSchema } from './schema';
import { useCreateTask } from '../use-create.hook';
import { ValuesTask } from './values.interface';
import { SmallSubmitButton } from 'src/components/common/button/submit';

import { GoX } from 'react-icons/go';
import { FlexLine } from 'src/components/common/layout/flex-line';
import { SmallIconButton } from 'src/components/common/button/icon/small';
import { SmallTextField } from 'src/components/common/fields/text/small';
import { WrapperFormCreateTask } from './wrapper';

interface Props {
  handleClose: () => void;
  sectionId: string;
}

export const FormCreateTask = ({ handleClose, sectionId }: Props) => {
  const { mutateAsync, isLoading } = useCreateTask();
  return (
    <WrapperFormCreateTask>
      <Formik<ValuesTask>
        validationSchema={createSectionValidationSchema}
        initialValues={{ title: '', sectionId }}
        onSubmit={async values => {
          await mutateAsync(values);
          handleClose();
        }}
      >
        {() => {
          return (
            <Form autoComplete="off" noValidate>
              <Field
                label="Task's Title"
                size="small"
                fullWidth
                name="title"
                type="text"
                multiline
                autoFocus
                variant="standard"
                component={SmallTextField}
              />
              <FlexLine>
                <SmallSubmitButton type="submit" inProgress={isLoading} text="create" />
                <SmallIconButton type="submit" icon={GoX} size="small" onClick={handleClose} />
              </FlexLine>
            </Form>
          );
        }}
      </Formik>
    </WrapperFormCreateTask>
  );
};
