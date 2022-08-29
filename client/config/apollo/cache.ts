import { InMemoryCache, makeVar } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

export const searchVar = makeVar('');

const { merge: offsetLimitPaginationMerge } = offsetLimitPagination();

/**
 * @link https://www.apollographql.com/docs/react/caching/cache-configuration
 */
export const cache = new InMemoryCache({
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
