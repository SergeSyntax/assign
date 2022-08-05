import { gql } from '@apollo/client';
import { TASK_FIELDS } from '../../../common/fragments/task-fields.gql';

export const UPDATE_TASK = gql`
  ${TASK_FIELDS}
  mutation UpdateTask($id: ID!, $data: UpdateTaskData!) {
    updateTask(id: $id, data: $data) {
      status
      task {
        ...TaskFields
      }
    }
  }
`;
