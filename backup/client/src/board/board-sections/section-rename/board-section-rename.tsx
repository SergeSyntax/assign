import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateSection } from '../section/update-section.hook';
import { SectionFields } from '../__generated__/SectionFields';
import { BoardSectionTitleField } from './board-section-title-field.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { boardSectionRenameSchema } from './board-section-rename-schema';

interface SectionRenameProps {
  handleHide: () => void;
  section: SectionFields;
}

interface SectionRenameArgs {
  title: string;
}

export const SectionRename: React.FC<SectionRenameProps> = ({ handleHide, section }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<SectionRenameArgs>({
    defaultValues: { title: section.title },
    mode: 'all',
    resolver: yupResolver(boardSectionRenameSchema),
  });
  const titleKey = 'title';
  const { updateSection } = useUpdateSection();
  const isError = !isValid;

  const handleFormSubmit: SubmitHandler<SectionRenameArgs> = async ({ title }) => {
    await updateSection({
      variables: { id: section.id, data: { title } },
    });
    handleHide();
  };
  const title = watch(titleKey);
  const handleTitleFieldBlur = () => handleFormSubmit({ title });

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit(handleFormSubmit)}>
      <BoardSectionTitleField
        {...register(titleKey)}
        autoFocus
        onBlur={handleSubmit(handleTitleFieldBlur)}
        error={isError}
        helperText={errors[titleKey]?.message ?? ' '}
      />
    </form>
  );
};
