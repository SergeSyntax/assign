import { validateSchema } from 'test-utils';
import { usersSchemas } from './users.schema';

describe('users.schema', () => {
  it('should create an executable schema', () =>
    expect(validateSchema(usersSchemas)).not.toThrow());
});
