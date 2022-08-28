import _ from 'lodash';
import { AuthenticationError } from 'apollo-server-core';
import { ApolloContext } from '@/common/types';
import { Resolvers } from '@/common/types/generated/graphql';
import { AUTH_HEADER, BEARER_PREFIX } from './auth.utils';
import * as usersService from './users.service';
import { User } from './users.type';

const setAuthToken = (context: ApolloContext, token: string) => {
  context.req.session = { passport: { user: token } };
  context.res.header(AUTH_HEADER, `${BEARER_PREFIX} ${token}`);
};

export const usersResolvers: Resolvers = {
  Mutation: {
    registration: async (_parent, { registrationInput }, context, _info) => {
      const { user, token } = await usersService.registration(registrationInput);
      setAuthToken(context, token);
      return user;
    },
    login: async (_parent, { loginInput }, context, _info) => {
      const { user, token } = await usersService.login(loginInput);
      setAuthToken(context, token);
      return user;
    },
  },
  Query: {
    profile: (_parent, _args, context, _info) => {
      if (!context.req.user) throw new AuthenticationError('invalid credentials');

      return _.pick(context.req.user as User, ['id', 'name', 'email']);
    },
  },
};
