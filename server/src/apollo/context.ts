import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express';

export const context: ContextFunction<ExpressContext, object> = ({ res, req }) => ({
  user: req.user,
  res,
  req,
});
