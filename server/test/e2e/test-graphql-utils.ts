import request from 'supertest';
import { ASTNode, print } from 'graphql';
import { ApolloError, GraphQLResponse } from 'apollo-server-core';

interface GraphqlArguments {
  query: ASTNode;
  variables?: Object;
  operationName?: string;
}

interface ApolloErrorResponse extends request.Response {
  body: {
    errors: ApolloError[];
  };
}
export interface ApolloResponse extends request.Response {
  body: GraphQLResponse;
}
export const getApolloResponseErrorCode = (res: ApolloErrorResponse) => {
  const [error] = res.body.errors;
  return error.extensions.code;
};

export const getApolloResponseData = (res: ApolloResponse, field: string) => {
  return res.body.data![field];
};

/**
 *
 * @link https://www.apollographql.com/docs/apollo-server/requests/#post-requests
 * @param param
 * @returns
 */
export const graphqlRequest = async ({ query, ...rest }: GraphqlArguments) =>
  request(context.server)
    .post('/graphql')
    .send({ query: print(query), ...rest });
