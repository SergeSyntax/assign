import { CorsOptions } from 'cors';
import { CLIENT_URL } from './environment';

// TODO: extract origin to constant
export const corsOptions: CorsOptions = {
  origin: [CLIENT_URL, 'https://studio.apollographql.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
