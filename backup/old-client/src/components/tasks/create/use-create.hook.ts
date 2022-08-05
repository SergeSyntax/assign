import { useMutation, gql } from '@apollo/client';
import * as CreateTaskTypes from './__generated__/CreateTask';

export const CreateTask = gql`
  mutation CreateTask($sectionId: ID!, $title: String!) {
    createTask(sectionId: $sectionId, title: $title) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useCreateTask = () => {
  return useMutation<CreateTaskTypes.CreateTask, CreateTaskTypes.CreateTaskVariables>(CreateTask);
};
