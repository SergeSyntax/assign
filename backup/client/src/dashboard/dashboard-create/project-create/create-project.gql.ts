import { gql } from '@apollo/client';
import { PROJECT_FIELDS } from '../../../common/fragments/project-fields.gql';

export const CREATE_PROJECT = gql`
  ${PROJECT_FIELDS}
  mutation CreateProject($title: String!, $accessibility: Accessibility!) {
    createProject(data: { title: $title, accessibility: $accessibility }) {
      status
      project {
        ...ProjectFields
      }
    }
  }
`;
