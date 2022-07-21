import { validateSchema } from 'test-utils';
import { usersSchemas } from '../users';

describe('users.schema', () => {
  it('should create an executable schema', () =>
    expect(validateSchema(usersSchemas)).not.toThrow());
});
