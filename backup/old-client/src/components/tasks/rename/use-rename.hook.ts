import { useMutation, gql } from '@apollo/client';

const RenameTask = gql`
  mutation RenameTask($id: ID!, $title: String!) {
    renameTask(id: $id, title: $title) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useRenameTask = () => {
  return useMutation(RenameTask);
};
