import _ from 'lodash';
import { DocumentNode } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { constraintDirective, constraintDirectiveTypeDefs } from 'graphql-constraint-directive';
import { usersResolvers, usersSchemas } from 'src/auth';

const common = [constraintDirectiveTypeDefs];

/**
 * generate graphql schema definition and merge it with common schema definitions
 * @param schema graphql schema definition
 * @returns
 */
export const getTypeDef = (...schema: DocumentNode[]) => [...common, ...schema];

export const getSchema = () => {
  const schema = makeExecutableSchema({
    typeDefs: getTypeDef(usersSchemas),
    resolvers: _.merge({}, usersResolvers),
  });
  return constraintDirective()(schema);
};
