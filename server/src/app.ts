import express, { Express, json } from 'express';
import http from 'http';
import cookieSession from 'cookie-session';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { isEnv, PORT, cookieSessionOptions, corsOptions, Env } from './common/config';
import { Logger } from '@/common/utils';
import { Apollo } from './common/utils/apollo';
import { passport } from './auth';
import { authRoute } from './auth/passport.route';

export class App {
  public app: Express;
  public httpServer: http.Server;
  public apollo: Apollo;

  constructor() {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.apollo = new Apollo(this.httpServer, this.app);
  }

  applyProductionMiddleware() {
    this.app.use(helmet());
    this.app.use(compression());
  }

  applyMiddleware() {
    // traffic proxy through nginx-ingress
    // express don't trust to ssl on proxy by default
    this.app.set('trust proxy', true);
    this.app.use(json({ limit: '50kb' }));
    this.app.use(cookieSession(cookieSessionOptions));
    this.app.use(cors(corsOptions));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  applyRoutes() {
    this.app.use('/auth', authRoute);
  }

  async init() {
    this.applyMiddleware();
    this.applyRoutes();
    if (isEnv(Env.Production)) this.applyProductionMiddleware();
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
