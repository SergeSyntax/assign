import { useMutation, gql } from '@apollo/client';
import * as DeleteProjectTypes from './__generated__/DeleteProject';

export const DeleteProject = gql`
  mutation DeleteProject($deleteProjectId: ID!) {
    deleteProject(id: $deleteProjectId) {
      id
      title
      owner
      accessibility
      createdAt
      updatedAt
    }
  }
`;
export const useDeleteProject = () => {
  return useMutation<DeleteProjectTypes.DeleteProject, DeleteProjectTypes.DeleteProjectVariables>(
    DeleteProject
  );
};
