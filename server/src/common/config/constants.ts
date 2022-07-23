import { CorsOptions } from 'cors';
import { CLIENT_URL, Env, isEnv } from './environment';

export const APOLLO_GRAPHQL_ORIGIN = 'https://studio.apollographql.com';

export const corsOptions: CorsOptions = {
  origin: isEnv(Env.Development) ? [CLIENT_URL, APOLLO_GRAPHQL_ORIGIN] : [CLIENT_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

export const cookieSessionOptions: CookieSessionInterfaces.CookieSessionOptions = {
  // jwt is already encrypted and can't be tempered
  signed: false,
  // check that the user use https connection
  secure: false,
  maxAge: 24 * 60 * 60 * 100,
};
