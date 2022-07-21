import { gql } from 'apollo-server-core';
import { validateSchema } from 'test-utils';

describe('common.schema', () => {
  it('should create an executable schema', () =>
    expect(
      validateSchema(gql`
        type Query {
          test: String
        }
      `),
    ).not.toThrow());
});
