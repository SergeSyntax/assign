import { CorsOptions } from 'cors';
import { APOLLO_GRAPHQL_ORIGIN, Env } from './constants';
import { CLIENT_URL, isEnv } from './environment';

export const corsOptions: CorsOptions = {
  origin: isEnv(Env.Development) ? [CLIENT_URL, APOLLO_GRAPHQL_ORIGIN] : [CLIENT_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
