import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import { constraintDirective } from 'graphql-constraint-directive';
import { getTypeDef } from 'src/schema/common';

const getSchema = (typeDefs: DocumentNode[]) => {
  const schema = makeExecutableSchema({
    typeDefs: getTypeDef(...typeDefs),
  });
  return constraintDirective()(schema);
};

export const validateSchema = (...typeDefs: DocumentNode[]) => {
  const schema = getSchema(typeDefs);
  return () =>
    new ApolloServer({
      schema,
      mocks: true,
    });
};
