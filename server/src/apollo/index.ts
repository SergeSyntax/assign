import { Application } from 'express';
import { corsOptions } from '../config/cors';
import { ApolloServer, ExpressContext } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServerOptions } from 'apollo-server-core';
import { context } from './context';
import { formatError } from './format-error';
import { getPlugins } from './plugins';
import { getSchema } from './schema';

export class Apollo {
  apolloServer: ApolloServer<ExpressContext>;

  public get graphqlPath(): string {
    return this.apolloServer.graphqlPath;
  }

  constructor(
    private httpServer: ApolloServerPluginDrainHttpServerOptions['httpServer'],
    private app: Application,
  ) {
    const plugins = getPlugins(this.httpServer);
    const schema = getSchema();

    this.apolloServer = new ApolloServer({
      schema,
      plugins,
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
