import { getUserLetter } from './user-options.util';

import { faker } from '@faker-js/faker';

const EMAIL = faker.internet.email();
const NAME = faker.name.fullName();

describe('formatUserInfo - util function', () => {
  it('should return the first char of the name and the last name', () => {
    const [firstName, lastName] = NAME.split(/\s/);
    const latter = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    console.log('latter', latter);

    expect(getUserLetter(EMAIL, NAME)).toEqual(latter);
  });

  it('should return the first char of the email', () => {
    expect(getUserLetter(EMAIL)).toBe(EMAIL.charAt(0));
  });
});
