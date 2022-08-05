import { useQuery } from '@apollo/client';
import { FETCH_TASK } from './fetch-task.gql';
import { FetchTask, FetchTaskVariables } from './__generated__/FetchTask';

export const useFetchTask = (id: string) => {
  const { data, loading } = useQuery<FetchTask, FetchTaskVariables>(FETCH_TASK, {
    variables: { id },
  });

  return { task: data?.fetchTask, loading };
};
