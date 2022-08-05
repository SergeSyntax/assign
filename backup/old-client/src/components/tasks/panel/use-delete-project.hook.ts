import { useMutation, gql } from '@apollo/client';
import * as DeleteTaskTypes from './__generated__/DeleteTask';

export const DeleteTask = gql`
  mutation DeleteTask($deleteTaskId: ID!) {
    deleteTask(id: $deleteTaskId) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useDeleteTask = () => {
  return useMutation<DeleteTaskTypes.DeleteTask, DeleteTaskTypes.DeleteTaskVariables>(DeleteTask);
};
