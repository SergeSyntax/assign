import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GoX } from 'react-icons/go';
import { TiTag } from 'react-icons/ti';
import { SmallLabel } from '../../../common/label';
import { CancelSubmitButton } from '../cancel-submit-button.styled';
import { CreateSubmitButton } from '../create-submit-button.styled';
import { FlexLine } from '../flex-line';
import { SmallTextField } from '../small-text-field.styled';
import { useCreateSection } from './create-section.hook';
import { SectionCreateFormWrapper } from './section-create-form-wrapper.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { SectionCreateFormSchema } from './section-create-form-schema';

const titleKey = 'title';

interface SectionCreateFormProps {
  handleClose: () => void;
  projectId: string;
}

interface SectionCreateFormValues {
  title: string;
}

export const SectionCreateForm: React.FC<SectionCreateFormProps> = ({ handleClose, projectId }) => {
  const { createSection, loading } = useCreateSection();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<SectionCreateFormValues>({
    resolver: yupResolver(SectionCreateFormSchema),
    mode: 'all',
  });
  const isError = !isValid && isDirty;

  const handleFormSubmit: SubmitHandler<SectionCreateFormValues> = async ({ title }) => {
    await createSection({ variables: { data: { projectId, title } } });
    handleClose();
  };

  return (
    <SectionCreateFormWrapper
      onSubmit={handleSubmit(handleFormSubmit)}
      autoComplete="off"
      noValidate
    >
      <>
        <SmallLabel htmlFor={titleKey} icon={TiTag} name={titleKey} />
        <SmallTextField
          {...register(titleKey)}
          error={isError}
          helperText={errors[titleKey]?.message ?? ' '}
          id={titleKey}
          placeholder="i.e. Todo"
          variant="outlined"
          size="small"
        />
      </>
      <FlexLine>
        <CreateSubmitButton inProgress={loading} text="create" />
        <CancelSubmitButton icon={GoX} size="small" onClick={handleClose} />
      </FlexLine>
    </SectionCreateFormWrapper>
  );
};
