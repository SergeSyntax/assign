import { gql } from '@apollo/client';

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    title
    accessibility
    createdAt
    updatedAt
  }
`;
