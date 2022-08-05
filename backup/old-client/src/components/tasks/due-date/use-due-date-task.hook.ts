import { useMutation, gql } from '@apollo/client';

const SetDueDateTask = gql`
  mutation SetTaskDueDate($setTaskDueDateId: ID!, $dueDate: String) {
    setTaskDueDate(id: $setTaskDueDateId, dueDate: $dueDate) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useDueDateTask = () => {
  return useMutation(SetDueDateTask);
};
