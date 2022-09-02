import { GraphQLContext, GraphQLRequest, ResponseResolver as OriginalResponseResolver } from 'msw';

export type ResponseResolver<
  T extends Record<string, unknown>,
  V extends Record<string, any>,
> = OriginalResponseResolver<GraphQLRequest<V>, GraphQLContext<T>>;

export const REQUEST_MS_DELAY = 1;
