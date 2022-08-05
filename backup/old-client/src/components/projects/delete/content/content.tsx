import React, { Fragment } from 'react';
import { styled } from '@mui/system';

const AlertContentDeleteProject = styled('div')`
  font-size: 1.4rem;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: #fffbdd;
`;
const WrapperContentDeleteProject = styled('div')`
  background-color: #f6f8fa;
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: 1.4rem;
`;

const FirstParagraphContentDeleteProject = styled('div')`
  padding-bottom: 1rem;
`;

interface Props {
  projectTitle: string;
}

export const ContentDeleteProject: React.FC<Props> = ({ projectTitle }) => {
  return (
    <Fragment>
      <AlertContentDeleteProject>
        Unexpected bad things will happen if you don’t read this!
      </AlertContentDeleteProject>
      <WrapperContentDeleteProject>
        <FirstParagraphContentDeleteProject>
          This action <strong>cannot</strong> be undone. This will permanently delete the{' '}
          <strong>{projectTitle}</strong> project, lists, tasks, and activity, and remove all
          collaborator associations.
        </FirstParagraphContentDeleteProject>
        <p>
          <strong>Note:</strong> there is an option to put your project in the archive. Once{' '}
          <strong>archived</strong>, a project&apos;s access changes to <strong>view only</strong>{' '}
          for all participants. Archiving a project allows you to retain historical information so
          nothing will be lost.
        </p>
      </WrapperContentDeleteProject>
    </Fragment>
  );
};
