import React from 'react';
import { GoX } from 'react-icons/go';
import { ProjectDeleteHeaderButton } from './project-delete-header-button.styled';
import { ProjectDeleteHeaderTitle } from './project-delete-header-title.styled';
import { ProjectDeleteHeaderWrapper } from './project-delete-header-wrapper.styled';

interface ProjectDeleteHeaderProps {
  closeDialog: () => void;
}

export const ProjectDeleteHeader: React.FC<ProjectDeleteHeaderProps> = ({ closeDialog }) => {
  return (
    <ProjectDeleteHeaderWrapper>
      <ProjectDeleteHeaderTitle>Are you absolutely sure?</ProjectDeleteHeaderTitle>
      <ProjectDeleteHeaderButton onClick={closeDialog}>
        <GoX />
      </ProjectDeleteHeaderButton>
    </ProjectDeleteHeaderWrapper>
  );
};
