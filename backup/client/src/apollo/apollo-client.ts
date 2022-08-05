import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { offsetLimitPagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { BASE_URL } from '../common/config';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
type Client = ApolloClient<NormalizedCacheObject>;

let apolloClient: Client;

const httpLink = new HttpLink({
  uri: `${BASE_URL}/graphql`, // Server URL (must be absolute)
  credentials: 'include',

  // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const { merge: offsetLimitPaginationMerge } = offsetLimitPagination();

/**
 * @link https://www.apollographql.com/docs/react/caching/cache-configuration
 */
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        fetchProjects: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: ['args', ['filter', ['value']]],
        },
      },
    },
    ProjectsResponse: {
      fields: {
        projects: {
          merge: offsetLimitPaginationMerge,
          // read(existing, { variables, args }) {
          //   console.log('args', args);

          //   const offset = variables?.args?.offset;
          //   const limit = variables?.args?.limit;

          //   // A read function should always return undefined if existing is
          //   // undefined. Returning undefined signals that the field is
          //   // missing from the cache, which instructs Apollo Client to
          //   // fetch its value from your GraphQL server.
          //   return existing && existing.slice(offset, offset + limit);
          // },
        },
        // {
        //   merge(existing = [], incoming, { variables }) {
        //     const offset = variables?.args?.offset;
        //     console.log(offset);

        //     // Slicing is necessary because the existing data is
        //     // immutable, and frozen in development.
        //     const merged = existing ? existing.slice() : [];
        //     for (let i = 0; i < incoming.length; ++i) {
        //       merged[offset + i] = incoming[i];
        //     }
        //     return merged;
        //   },
        // },
      },
      // merge: true,
    },
    // Section: {
    //   // keyFields: ['id', 'projectId'],
    // },
  },
});

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink]),
    cache,
  });

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client: Client, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
