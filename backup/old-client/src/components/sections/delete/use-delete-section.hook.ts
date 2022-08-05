import { useMutation, gql } from '@apollo/client';

export const DeleteSection = gql`
  mutation DeleteSection($deleteSectionId: ID!) {
    deleteSection(id: $deleteSectionId) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useDeleteSection = (sectionId: string) => {
  return useMutation(DeleteSection, { variables: { sectionId } });
};
