import { useMutation, gql } from '@apollo/client';
import * as RenameSectionTypes from './__generated__/RenameSection';

export const RenameSection = gql`
  mutation RenameSection($renameSectionId: ID!, $title: String) {
    renameSection(id: $renameSectionId, title: $title) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useRenameSection = () =>
  useMutation<RenameSectionTypes.RenameSection, RenameSectionTypes.RenameSectionVariables>(
    RenameSection
  );
