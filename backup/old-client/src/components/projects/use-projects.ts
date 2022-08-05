import { useQuery, gql } from '@apollo/client';
import * as ProjectsTypes from './__generated__/Projects';
import { ProjectRes } from 'src/components/common/@types/project-res.interface';

interface GetProjectProps {
  _order: 'desc' | 'asc';
  _sort: keyof ProjectRes;
  filter: [keyof ProjectRes, string];
}

const Projects = gql`
  query Projects {
    projects {
      id
      title
      accessibility
      owner
      createdAt
      updatedAt
    }
  }
`;

export const useProjects = () => useQuery<ProjectsTypes.Projects>(Projects);
