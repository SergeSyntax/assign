import React from 'react';
import { ProjectDeleteContentAlert } from './project-delete-content-alert.styled';
import { ProjectDeleteContentFirstParagraph } from './project-delete-content-first-paragraph.styled';
import { ProjectDeleteContentWrapper } from './project-delete-content-wrapper.styled';

interface ProjectDeleteContentProps {
  projectTitle: string;
}

export const ProjectDeleteContent: React.FC<ProjectDeleteContentProps> = ({ projectTitle }) => {
  return (
    <>
      <ProjectDeleteContentAlert>
        Unexpected bad things will happen if you don’t read this!
      </ProjectDeleteContentAlert>
      <ProjectDeleteContentWrapper>
        <ProjectDeleteContentFirstParagraph>
          This action <strong>cannot</strong> be undone. This will permanently delete the{' '}
          <strong>{projectTitle}</strong> project, lists, tasks, and activity, and remove all
          collaborator associations.
        </ProjectDeleteContentFirstParagraph>
        <p>
          <strong>Note:</strong> there is an option to put your project in the archive. Once{' '}
          <strong>archived</strong>, a project&apos;s access changes to <strong>view only</strong>{' '}
          for all participants. Archiving a project allows you to retain historical information so
          nothing will be lost.
        </p>
      </ProjectDeleteContentWrapper>
    </>
  );
};
