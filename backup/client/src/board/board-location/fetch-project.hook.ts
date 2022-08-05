import { gql, useApolloClient, useQuery } from '@apollo/client';
import { PROJECT_FIELDS } from '../../common/fragments/project-fields.gql';
import { FETCH_PROJECTS } from '../../projects-panel/projects-list/fetch-projects.gql';
import { FETCH_PROJECT } from './fetch-project.gql';
import { FetchProject } from './__generated__/FetchProject';

export const useFetchProject = (id: string) => {
  const { data, loading } = useQuery<FetchProject>(FETCH_PROJECT, {
    variables: { id },
  });

  return { project: data?.fetchProject, loading };
};
