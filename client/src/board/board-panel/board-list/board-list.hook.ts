import { NetworkStatus, useQuery, useReactiveVar } from '@apollo/client';
import { searchVar } from '../../apollo';
import { FETCH_PROJECTS } from './fetch-projects.gql';
import { FetchProjects, FetchProjectsVariables } from './__generated__/FetchProjects';

export const useFetchProjects = (offset?: number, limit?: number) => {
  const search = useReactiveVar<string>(searchVar);

  const args = search ? { offset, limit, filter: [{ field: 'title', value: search }] } : { offset, limit };

  const { loading, error, data, networkStatus, fetchMore } = useQuery<FetchProjects, FetchProjectsVariables>(
    FETCH_PROJECTS,
    {
      variables: { args },
      notifyOnNetworkStatusChange: true,
      // pollInterval: 2000,
    },
  );

  const isLoading =
    networkStatus === NetworkStatus.loading ||
    networkStatus === NetworkStatus.setVariables ||
    networkStatus === NetworkStatus.poll;
  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;
  const isRefetching = networkStatus === NetworkStatus.refetch;

  const hasMore =
    Boolean(data?.fetchProjects?.total) && data?.fetchProjects?.total !== data?.fetchProjects?.projects?.length;

  const handleFetchMore = () =>
    fetchMore({
      variables: { args: { ...args, offset: data?.fetchProjects?.projects?.length ?? 0 } },
    });

  return {
    loading: isLoading,
    isFetchingMore,
    isRefetching,
    error,
    projects: data?.fetchProjects?.projects,
    handleFetchMore,
    searchValue: search,
    hasMore,
  };
};
