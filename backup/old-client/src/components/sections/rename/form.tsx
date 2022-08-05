import React from 'react';
import { Field, Form, Formik } from 'formik';
import { ValuesRenameSection } from './values.interface';
import { renameSectionValidationSchema } from './schema';
import { SectionRes } from 'src/components/sections/section-res.interface';
import { FieldFormHeaderSection } from './field';
import { useRenameSection } from './use-rename-section.hook';
import { Sections_sections } from '../__generated__/Sections';

interface Props {
  section: Sections_sections;
  handleClose: () => void;
}

export const FormRenameSection = ({ section, handleClose }: Props) => {
  const { mutateAsync, isLoading } = useRenameSection();
  return (
    <Formik<ValuesRenameSection>
      validationSchema={renameSectionValidationSchema}
      initialValues={{ title: section.title, sectionId: section.id }}
      onSubmit={async values => {
        await mutateAsync(values);
        handleClose();
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form autoComplete="off" noValidate>
            <Field
              autoFocus
              onBlur={handleSubmit}
              size="small"
              name="title"
              component={FieldFormHeaderSection}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
