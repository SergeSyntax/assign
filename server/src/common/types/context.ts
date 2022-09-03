import { Request, Response } from 'express';
import { User } from 'src/auth';

export interface ApolloContext {
  req: Request;
  res: Response;
  user?: User;
}
