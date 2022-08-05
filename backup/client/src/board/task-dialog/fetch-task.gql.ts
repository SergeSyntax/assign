import { gql } from '@apollo/client';

export const FETCH_TASK = gql`
  query FetchTask($id: ID!) {
    fetchTask(id: $id) {
      id
      title
      order
      dueDate
      description
      sectionId
      createdAt
      updatedAt
    }
  }
`;
