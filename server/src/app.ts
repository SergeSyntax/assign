import express, { json } from 'express';
import http, { Server } from 'http';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { corsOptions } from './config/cors';
import { ApolloServer, Config, ExpressContext } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import { constraintDirective } from 'graphql-constraint-directive';
import { cookieSessionOptions } from './config/cookie-session';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginUsageReportingDisabled,
  UserInputError,
} from 'apollo-server-core';
import { isEnv } from './config/environment';
import { Env } from './config/constants';
import { resolvers } from './resolvers';

export class App {
  app = express();
  _httpServer?: Server;
  _apolloServer?: ApolloServer<ExpressContext>;

  public set httpServer(v: Server) {
    this._httpServer = v;
  }

  public get httpServer(): Server {
    if (!this._httpServer) throw new Error('test');
    return this._httpServer;
  }

  public set apolloServer(apolloServer: ApolloServer<ExpressContext>) {
    this._apolloServer = apolloServer;
  }

  public get apolloServer(): ApolloServer<ExpressContext> {
    if (!this._apolloServer) throw new Error('test');

    return this._apolloServer;
  }

  public get graphqlPath(): string {
    return this.apolloServer.graphqlPath;
  }

  getSchema() {
    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });
    return constraintDirective()(schema);
  }

  getLandingPagePlugin() {
    return isEnv(Env.Production)
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageLocalDefault({
          variables: {
            createProjectArgs: {},
          } as any,
        });
  }

  /**
   * @link https://www.apollographql.com/docs/apollo-server/api/plugin/drain-http-server/#using-the-plugin
   * @link https://www.apollographql.com/docs/apollo-server/api/plugin/usage-reporting/
   * @returns plugins https://www.apollographql.com/docs/apollo-server/integrations/plugins/
   */
  getPlugins(): Config['plugins'] {
    return [
      ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ApolloServerPluginUsageReportingDisabled(),
      this.getLandingPagePlugin(),
    ];
  }

  async startApolloServer() {
    this.apolloServer = new ApolloServer({
      schema: this.getSchema(),
      plugins: this.getPlugins(),
    });
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({
      app: this.app,
      cors: corsOptions,
    });
  }

  async init() {
    this.httpServer = http.createServer(this.app);
    this.app.use(json());
    this.app.use(cors(corsOptions));
    this.app.use(cookieSession(cookieSessionOptions));
    await this.startApolloServer();
    return this.httpServer;
  }
}

export const app = new App();
