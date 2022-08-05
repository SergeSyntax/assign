import { useQuery } from '@apollo/client';
import { FETCH_SECTIONS } from './fetch-sections.gql';
import { FetchSections, FetchSectionsVariables } from './__generated__/FetchSections';

export const useFetchSections = (id: string) => {
  const { data, loading } = useQuery<FetchSections, FetchSectionsVariables>(FETCH_SECTIONS, {
    variables: { id },
  });

  return { sections: data?.fetchSections?.sections, loading };
};
