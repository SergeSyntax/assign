import { usersSchemas } from './users';
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

export const typeDefs = [constraintDirectiveTypeDefs, usersSchemas];
