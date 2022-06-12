import express from 'express';
import http, { Server } from 'http';
import cookieSession from 'cookie-session';
import cors from 'cors';
import { corsOptions } from './config/cors';

export const app = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  app.use(express.json());
  app.use(
    cookieSession({
      // jwt is already encrypted and can't be tempered
      signed: false,
      // check that the user use https connection
      secure: false,
      maxAge: 24 * 60 * 60 * 100,
    }),
  );

  // app.use(passport.initialize());
  // app.use(passport.session());
  app.use(cors(corsOptions));

  // routes

  // const appoloServer = new Apoolo
};
