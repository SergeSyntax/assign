import { useQuery, gql } from '@apollo/client';

import * as SectionsTypes from './__generated__/Sections';

export const Sections = gql`
  query Sections($projectId: ID!) {
    sections(projectId: $projectId) {
      title
      id
      createdAt
      updatedAt
      tasks {
        sectionId
        updatedAt
        createdAt
        id
        title
      }
    }
  }
`;

export const useSections = (projectId: string) =>
  useQuery<SectionsTypes.Sections, SectionsTypes.SectionsVariables>(Sections, {
    variables: { projectId }
  });
