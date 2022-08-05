import { gql } from '@apollo/client';
import { TASK_FIELDS } from '../../common/fragments/task-fields.gql';
import { SECTION_FIELDS } from './section-fields.gql';
export const FETCH_SECTIONS = gql`
  ${SECTION_FIELDS}
  ${TASK_FIELDS}
  query FetchSections($id: ID!) {
    fetchSections(projectId: $id) {
      total
      sections {
        ...SectionFields
        tasks {
          ...TaskFields
        }
      }
    }
  }
`;
