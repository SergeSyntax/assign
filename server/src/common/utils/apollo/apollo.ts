import { Application } from 'express';
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

export const formatError = (err: GraphQLError): GraphQLFormattedError => {
  // Don't give the specific errors to the client.
  if (err.message.startsWith('Database Error: ')) {
    // TODO: check with unapplied migration
    return new Error('Internal server error');
  }

  if (err.originalError instanceof UserInputError) {
    delete err.extensions.exception;
  }
  // Otherwise return the original error. The error can also
  // be manipulated in other ways, as long as it's returned.
  return err;
};

export const context: ContextFunction<ExpressContext, object> = ({ res, req }) => ({
  user: req.user,
  res,
  req,
});

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
