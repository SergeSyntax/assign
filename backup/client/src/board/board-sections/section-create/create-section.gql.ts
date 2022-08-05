import { gql } from '@apollo/client';
import { SECTION_FIELDS } from '../section-fields.gql';

export const CREATE_SECTION = gql`
  ${SECTION_FIELDS}
  mutation CreateSection($data: CreateSectionData!) {
    createSection(data: $data) {
      status
      section {
        ...SectionFields
      }
    }
  }
`;
