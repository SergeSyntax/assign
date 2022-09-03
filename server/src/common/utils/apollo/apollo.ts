import { Application, Request } from 'express';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import {
  ContextFunction,
  ApolloServerPluginDrainHttpServerOptions,
  UserInputError,
} from 'apollo-server-core';
import { getPlugins } from './plugins';
import { getSchema } from './schema';
import { corsOptions } from '@/common/config/constants';
import { Env, isEnv } from '@/common/config';
import { getUserFromJWT, handleAuthHeader } from 'src/auth/users.service';

export const formatError = (err: GraphQLError): GraphQLFormattedError => {
  // Don't give the specific errors to the client.
  if (err.message.startsWith('connect ECONNREFUSED')) {
    return new Error('Internal server error');
  }

  if (isEnv(Env.Production) && err.originalError instanceof UserInputError) {
    delete err.extensions.exception;
  }
  // Otherwise return the original error. The error can also
  // be manipulated in other ways, as long as it's returned.
  return err;
};

/**
 * @link https://www.apollographql.com/docs/apollo-server/security/authentication/#putting-authenticated-user-info-on-the-context
 * @link https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields
 */
export const context: ContextFunction<ExpressContext, object> = async ({ res, req }) => {
  await handleAuthHeader(req);
  return {
    user: req.user,
    res,
    req,
  };
};

export class Apollo {
  apolloServer: ApolloServer<ExpressContext>;

  public get graphqlPath(): string {
    return this.apolloServer.graphqlPath;
  }

  constructor(
    private httpServer: ApolloServerPluginDrainHttpServerOptions['httpServer'],
    private app: Application,
  ) {
    this.apolloServer = new ApolloServer({
      schema: getSchema(),
      plugins: getPlugins(this.httpServer),
      context,
      formatError,
      // https://www.apollographql.com/docs/apollo-server/api/apollo-server/#csrfprevention
      csrfPrevention: true,
      // https://www.apollographql.com/docs/apollo-server/performance/cache-backends
      cache: 'bounded',
    });
  }

  async start() {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({
      app: this.app,
      cors: corsOptions,
    });
  }
}
