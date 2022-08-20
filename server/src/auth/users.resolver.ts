import { ApolloContext } from '@/common/types';
import { Resolvers } from '@/common/types/generated/graphql';
import { AUTH_HEADER, BEARER_PREFIX } from './auth.utils';
import * as usersService from './users.service';

const setAuthToken = (context: ApolloContext, token: string) => {
  context.req.session = { passport: { user: token } };
  context.res.header(AUTH_HEADER, `${BEARER_PREFIX} ${token}`);
};

export const usersResolvers: Resolvers = {
  Mutation: {
    registration: async (_parent, { createUserData }, context, _info) => {
      const { user, token } = await usersService.registration(createUserData);
      setAuthToken(context, token);
      return user;
    },
    login: async (_parent, { loginData }, context, _info) => {
      const { user, token } = await usersService.login(loginData);
      setAuthToken(context, token);
      return user;
    },
  },
};
