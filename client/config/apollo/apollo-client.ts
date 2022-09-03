import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { cache } from '..';
import { CreateApolloHttpLink, generateLinks } from './links';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
type Client = ApolloClient<NormalizedCacheObject>;

let apolloClient: Client;

interface InitializeApolloArgs extends CreateApolloHttpLink {
  initialState?: Partial<NormalizedCacheObject> | null;
}

const createApolloClient = (props: CreateApolloHttpLink) =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: generateLinks(props),
    connectToDevTools: process.env.NODE_ENV === 'development',
    cache,
  });

export function initializeApollo({ initialState, ...rest }: InitializeApolloArgs = { initialState: null }) {
  const _apolloClient = apolloClient ?? createApolloClient(rest);

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

/**
 * @link https://www.apollographql.com/docs/react/api/core/ApolloClient/#ApolloClient.clearStore
 */
export function clearStore() {
  return apolloClient?.clearStore();
}

export function addApolloState(client: Client, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo({ initialState }), [initialState]);
  return store;
}
