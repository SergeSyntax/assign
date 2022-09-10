import { faker } from '@faker-js/faker';
import { User } from 'src/common/apollo/types';

export const MOCK_EMAIL = faker.internet.email();
export const MOCK_NAME = faker.name.firstName();
export const MOCK_PASSWORD = faker.company.name();
export const MOCK_USER_ID = faker.datatype.uuid();

export const USER: User = {
  id: MOCK_USER_ID,
  name: MOCK_NAME,
  email: MOCK_EMAIL,
};
