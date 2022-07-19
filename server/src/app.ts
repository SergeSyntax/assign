import express, { Express, json } from 'express';
import http from 'http';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { corsOptions } from './config/cors';
import { cookieSessionOptions } from './config/cookie-session';
import { passport } from './services';
import { Apollo } from './apollo';
import { isEnv, PORT } from './config/environment';
import { Logger } from './utils/logger';
import { Env } from './config/constants';

export class App {
  public app: Express;
  public httpServer: http.Server;
  public apollo: Apollo;

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.apollo = new Apollo(this.httpServer, this.app);
  }

  applyMiddleware() {
    this.app.use(json());
    this.app.use(cors(corsOptions));
    this.app.use(cookieSession(cookieSessionOptions));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  async init() {
    this.applyMiddleware();
    await this.apollo.start();
    return this.httpServer;
  }

  listen() {
    return this.httpServer.listen(PORT, () => {
      Logger.info(`Listening on port ${PORT}`);
      if (isEnv(Env.Development))
        Logger.info(`Server ready at http://localhost:${PORT}${this.apollo.graphqlPath}`);
    });
  }
}

export const app = new App();
