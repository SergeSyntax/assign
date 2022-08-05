import { useQuery, gql } from '@apollo/client';
import * as TaskTypes from './__generated__/Task';

export const Task = gql`
  query Task($taskId: ID) {
    task(id: $taskId) {
      title
      id
      createdAt
      updatedAt
      sectionId
    }
  }
`;

export const useTask = (id: string) => useQuery<TaskTypes.Task>(Task, { variables: { id } });
