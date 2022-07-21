import { DocumentNode } from 'graphql';
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

const common = [constraintDirectiveTypeDefs];

/**
 * generate graphql schema definition and merge it with common schema definitions
 * @param schema graphql schema definition
 * @returns
 */
export const getTypeDef = (...schema: DocumentNode[]) => [...common, ...schema];
