import { Resolvers } from 'src/types/generated/graphql';
import { usersResolvers } from './users';
import _ from 'lodash';

export const resolvers: Resolvers = _.merge({}, usersResolvers);
