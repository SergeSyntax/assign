import { gql } from '@apollo/client';
import { SECTION_FIELDS } from '../section-fields.gql';

export const UPDATE_SECTION = gql`
  ${SECTION_FIELDS}
  mutation UpdateSection($id: ID!, $data: UpdateSectionData!) {
    updateSection(id: $id, data: $data) {
      status
      section {
        ...SectionFields
      }
    }
  }
`;
