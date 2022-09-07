import * as Types from '../../common/apollo/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OpenAuthQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type OpenAuthQuery = { __typename?: 'Query', isGoogleProviderConnected: boolean, isGithubProviderConnected: boolean };


export const OpenAuthDocument = gql`
    query OpenAuth {
  isGoogleProviderConnected
  isGithubProviderConnected
}
    `;

/**
 * __useOpenAuthQuery__
 *
 * To run a query within a React component, call `useOpenAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useOpenAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOpenAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useOpenAuthQuery(baseOptions?: Apollo.QueryHookOptions<OpenAuthQuery, OpenAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OpenAuthQuery, OpenAuthQueryVariables>(OpenAuthDocument, options);
      }
export function useOpenAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OpenAuthQuery, OpenAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OpenAuthQuery, OpenAuthQueryVariables>(OpenAuthDocument, options);
        }
export type OpenAuthQueryHookResult = ReturnType<typeof useOpenAuthQuery>;
export type OpenAuthLazyQueryHookResult = ReturnType<typeof useOpenAuthLazyQuery>;
export type OpenAuthQueryResult = Apollo.QueryResult<OpenAuthQuery, OpenAuthQueryVariables>;