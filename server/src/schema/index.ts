import { getTypeDef } from './common';
import { usersSchemas } from './users';

export const typeDefs = getTypeDef(usersSchemas);
