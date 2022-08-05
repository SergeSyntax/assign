import { gql } from '@apollo/client';
import { TASK_FIELDS } from '../../../../common/fragments/task-fields.gql';

export const CREATE_TASK = gql`
  ${TASK_FIELDS}
  mutation CreateTask($data: CreateTaskData!) {
    createTask(data: $data) {
      status
      task {
        ...TaskFields
      }
    }
  }
`;
