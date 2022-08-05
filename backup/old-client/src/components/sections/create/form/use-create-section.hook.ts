import { useMutation, gql } from '@apollo/client';
import * as CreateSectionTypes from './__generated__/CreateSection';
export const CreateSection = gql`
  mutation CreateSection($projectId: ID!, $title: String!) {
    createSection(projectId: $projectId, title: $title) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useCreateSection = () => {
  return useMutation<CreateSectionTypes.CreateSection, CreateSectionTypes.CreateSectionVariables>(
    CreateSection
  );
};
