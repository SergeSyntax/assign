import { gql } from '@apollo/client';
import { PROJECT_FIELDS } from '../../common/fragments/project-fields.gql';

export const FETCH_PROJECT = gql`
  ${PROJECT_FIELDS}
  query FetchProject($id: ID!) {
    fetchProject(id: $id) {
      ...ProjectFields
    }
  }
`;
