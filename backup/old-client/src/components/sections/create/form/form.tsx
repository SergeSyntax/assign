import React from 'react';
import { Formik } from 'formik';
import { TiTag } from 'react-icons/ti';
import { createSectionValidationSchema } from './schema';
import { useCreateSection } from './use-create-section.hook';
import { ValuesSection } from './values.interface';
import { SmallSubmitButton } from 'src/components/common/button/submit';
import { SmallTextFieldset } from 'src/components/common/fields/fieldset/small-text';
import { GoX } from 'react-icons/go';
import { FlexLine } from '../../../common/layout/flex-line';
import { WrapperFormCreateSection } from './wrapper';
import { SmallIconButton } from 'src/components/common/button/icon/small';
import { CreateSectionVariables } from './__generated__/CreateSection';

interface Props {
  handleClose: () => void;
  projectId: string;
}

export const FormCreateSection = ({ handleClose, projectId }: Props) => {
  const [mutate, { loading }] = useCreateSection();

  return (
    <Formik<CreateSectionVariables>
      validationSchema={createSectionValidationSchema}
      initialValues={{ title: '', projectId }}
      onSubmit={async values => {
        console.log(values);
        await mutate(values);
        handleClose();
      }}
    >
      {() => {
        return (
          <WrapperFormCreateSection autoComplete="off" noValidate>
            <SmallTextFieldset icon={TiTag} name="title" type="text" placeholder="i.e. Todo" />
            <FlexLine>
              <SmallSubmitButton type="submit" inProgress={loading} text="create" />
              <SmallIconButton type="submit" icon={GoX} size="small" onClick={handleClose} />
            </FlexLine>
          </WrapperFormCreateSection>
        );
      }}
    </Formik>
  );
};
