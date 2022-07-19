import { makeExecutableSchema } from '@graphql-tools/schema';
import { constraintDirective } from 'graphql-constraint-directive';
import { resolvers } from '../resolvers';
import { typeDefs } from '../schema';

export const getSchema = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  return constraintDirective()(schema);
};
