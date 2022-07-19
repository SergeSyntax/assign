import { UserInputError } from 'apollo-server-core';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

export const formatError = (err: GraphQLError): GraphQLFormattedError => {
  // Don't give the specific errors to the client.
  if (err.message.startsWith('Database Error: ')) {
    return new Error('Internal server error');
  }

  if (err.originalError instanceof UserInputError) {
    delete err.extensions.exception;
  }
  // Otherwise return the original error. The error can also
  // be manipulated in other ways, as long as it's returned.
  return err;
};
