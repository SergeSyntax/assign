import { Resolvers } from '@/common/types/generated/graphql';
import { AUTH_HEADER, BEARER_PREFIX } from './auth.utils';
import * as usersService from './users.service';

export const usersResolvers: Resolvers = {
  Mutation: {
    registration: async (_parent, { createUserData }, context, info) => {
      const { user, token } = await usersService.registration(createUserData);
      context.req.session = { passport: { user: token } };
      context.res.header(AUTH_HEADER, `${BEARER_PREFIX} ${token}`);
      return user;
    },
  },
};
