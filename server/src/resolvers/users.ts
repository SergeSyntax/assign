import { Resolvers } from 'src/types/generated/graphql';
import { AUTH_HEADER, BEARER_PREFIX } from 'src/utils/crypto';
import * as usersService from '../services/users';

export const usersResolvers: Resolvers = {
  Mutation: {
    registration: async (_parent, { data }, context, info) => {
      const { user, token } = await usersService.registration(data);
      context.req.session = { passport: { user: token } };
      context.res.header(AUTH_HEADER, `${BEARER_PREFIX} ${token}`);
      return user;
    },
  },
};
