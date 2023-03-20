import React from 'react';
import { useForm } from 'react-hook-form';
import { FetchProjects_fetchProjects_projects } from '../../projects-list/__generated__/FetchProjects';
import { useDeleteProject } from './delete-project.hook';
import { ProjectDeleteFormButton } from './project-delete-form-button.styled';
import { ProjectDeleteFormInput } from './project-delete-form-input.styled';
import { ProjectDeleteFormLabel } from './project-delete-form-label.styled';
import { ProjectDeleteFormWrapper } from './project-delete-form-wrapper.styled';

interface ProjectDeleteFormArgs {
  title: string;
}

export interface ProjectDeleteFormProps {
  project: FetchProjects_fetchProjects_projects;
  closeDialog: () => void;
}

export const ProjectDeleteForm: React.FC<ProjectDeleteFormProps> = ({
  project: { id, title },
  closeDialog,
}) => {
  const { deleteProject, loading } = useDeleteProject(id);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProjectDeleteFormArgs>({
    defaultValues: { title: '' },
    mode: 'all',
  });

  const onSubmit = async () => {
    await deleteProject();
    closeDialog();
  };
  const isDisabled = Boolean(errors.title) || !isDirty;

  return (
    <ProjectDeleteFormWrapper autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
      <ProjectDeleteFormLabel htmlFor="project-delete-title">
        Please type <strong>{title}</strong> to confirm.
      </ProjectDeleteFormLabel>
      <ProjectDeleteFormInput
        {...register('title', { required: true, validate: (value) => value === title })}
        id="project-delete-title"
        autoFocus
        name="title"
      />
      <ProjectDeleteFormButton
        inProgress={loading}
        disabled={isDisabled}
        text="I understand the consequences, delete this project"
      />
    </ProjectDeleteFormWrapper>
  );
};
