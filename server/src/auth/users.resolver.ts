import _ from 'lodash';
import { AuthenticationError } from 'apollo-server-core';
import { ApolloContext } from '@/common/types';
import { Resolvers } from '@/common/types/generated/graphql';
import { AUTH_HEADER, toBearerToken } from './auth.util';
import * as usersService from './users.service';
import { isGithubProviderConnected, isGoogleProviderConnected } from './auth.const';

const setAuthToken = (context: ApolloContext, token: string) => {
  context.req.session = { passport: { user: token } };
  context.res.header(AUTH_HEADER, toBearerToken(token));
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
    currentUser: (_parent, _args, { user }, _info) => {
      if (!user) throw new AuthenticationError('invalid credentials');
      return usersService.formatUserType(user);
    },
    isGoogleProviderConnected: () => isGoogleProviderConnected,
    isGithubProviderConnected: () => isGithubProviderConnected,
  },
};
