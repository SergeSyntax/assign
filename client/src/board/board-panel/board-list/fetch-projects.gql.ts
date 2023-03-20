import { gql } from '@apollo/client';
import { PROJECT_FIELDS } from '../../common/fragments/project-fields.gql';

export const FETCH_PROJECTS = gql`
  ${PROJECT_FIELDS}
  query FetchProjects($args: PaginationArgs!) {
    fetchProjects(args: $args) {
      total
      projects {
        id
        title
        accessibility
        createdAt
        updatedAt
      }
    }
  }
`;
