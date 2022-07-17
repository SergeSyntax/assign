import { Resolvers } from 'src/types/generated/graphql';
import * as usersService from '../services/users';

export const usersResolvers: Resolvers = {
  Mutation: {
    registration: async (_parent, { data }, context, info) => {
      const user = await usersService.registration(data);
      context.req.session = { passport: { user: user!.token } };
      // context.res.header('Authorization', `Bearer ${user.user!.token}`);
      return user;
    },
  },
};
