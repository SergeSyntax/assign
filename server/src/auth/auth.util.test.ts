import { Role } from '@/common/types';
import { faker } from '@faker-js/faker';
import { compare, DAYS_TILL_EXPIRATION, verify, hash, sign } from './auth.util';

const PASSWORD = 'test';
const SAME_PASSWORD = 'test';
const DIFFERENT_PASSWORD = 'different';

const USER = { id: faker.datatype.uuid(), role: Role.Admin };

describe('auth.utils', () => {
  describe('crypto.hash(), crypto.compare()', () => {
    it('should return true on matching passwords', async () => {
      const password = await hash(PASSWORD);
      const isMatch = await compare(password, SAME_PASSWORD);
      expect(isMatch).toBeTruthy();
    });

    it('should fail crypto compare if different passwords provided', async () => {
      const password = await hash(PASSWORD);
      const isMatch = await compare(password, DIFFERENT_PASSWORD);
      expect(isMatch).toBeFalsy();
    });
  });

  describe('jwt.sign(), jwt.decode()', () => {
    it('should sign and decode the jwt', async () => {
      const jwt = sign(USER as any);
      const user = await verify(jwt);
      const dateNow = new Date();
      const expDate = dateNow.setDate(dateNow.getDate() + DAYS_TILL_EXPIRATION);

      expect(user.sub).toBe(USER.id);
      expect(user.aud).toBe(USER.role);
      expect(user.iat).toBeLessThan(Date.now());
      expect(user.exp).toBeGreaterThan(expDate * 0.9);
    });
  });
});
