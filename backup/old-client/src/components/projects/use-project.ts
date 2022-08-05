import { useQuery, gql } from '@apollo/client';
import * as ProjectTypes from './__generated__/Project';

const Project = gql`
  query Project($projectId: ID!) {
    project(id: $projectId) {
      id
      title
      accessibility
      owner
      createdAt
      updatedAt
    }
  }
`;

export const useProject = projectId =>
  useQuery<ProjectTypes.Project, ProjectTypes.ProjectVariables>(Project, {
    variables: { projectId }
  });

//   import { AxiosError } from 'axios';
// import { ProjectRes } from 'src/components/common/@types/project-res.interface';
// import { proxyAxios } from 'src/util/axios/proxy';

// export const getProject: QueryFunction<ProjectRes, QueryKey> = ({ queryKey: [_key, id] }) =>
//   proxyAxios.get<ProjectRes>(`/projects/${id}`).then(res => res.data);

// export const useProject = (id: string) =>
//   useQuery<ProjectRes, AxiosError>(['projects', id], getProject);
