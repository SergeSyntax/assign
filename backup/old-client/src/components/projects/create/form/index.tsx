import React from 'react';
import { Form, Formik } from 'formik';
import { TiTag } from 'react-icons/ti';
import { DialogActions } from '@mui/material';
import { createProjectValidationSchema } from './schema';
import { TextButton } from 'src/components/common/button/text-button';
import { SelectOptions } from 'src/components/common/fields/select';
import { useCreateProject } from './use-create-project';
import { TextFieldset } from 'src/components/common/fields/fieldset/text';
import { SelectFieldset } from 'src/components/common/fields/fieldset/select';
import { SubmitButton } from 'src/components/common/button/submit';
import { CreateProjectVariables } from './__generated__/CreateProject';
interface Props {
  handleClose: () => void;
}

const initialValues: CreateProjectVariables = {
  title: '',
  accessibility: true
};

const values: SelectOptions[] = [
  { key: 'private', value: false },
  { key: 'public', value: true }
];

const CreateProjectForm = ({ handleClose }: Props) => {
  const [mutate, { loading }] = useCreateProject();
  return (
    <Formik<CreateProjectVariables>
      validationSchema={createProjectValidationSchema}
      initialValues={initialValues}
      onSubmit={async (variables: CreateProjectVariables) => {
        await mutate({ variables });
        handleClose();
      }}
    >
      {() => {
        return (
          <Form autoComplete="off" noValidate>
            <TextFieldset icon={TiTag} name="title" type="text" placeholder="i.e. SkyNet Project" />
            <SelectFieldset icon={TiTag} name="accessibility" values={values} />
            <DialogActions>
              <TextButton onClick={handleClose}>cancel</TextButton>
              <SubmitButton inProgress={loading} text="create" />
            </DialogActions>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateProjectForm;
