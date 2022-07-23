import { faker } from '@faker-js/faker';
import { gql } from 'apollo-server-core';
import _ from 'lodash';

import {
  graphqlRequest,
  getApolloResponseErrorCode,
  getApolloResponseData,
  ApolloResponse,
} from '../test-graphql-utils';

const user = {
  email: faker.internet.email('test'),
  password: faker.lorem.word(1),
  name: faker.name.firstName('male'),
};

const query = gql`
  mutation Mutation($data: CreateUserData!) {
    registration(data: $data) {
      id
      name
      email
    }
  }
`;

describe('auth', () => {
  describe('Mutation', () => {
    describe('registration(data: CreateUserData!): User!', () => {
      const getRegistrationData = (res: ApolloResponse) =>
        getApolloResponseData(res, 'registration');

      it('should return error if password is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: _.omit(user, 'password'),
          },
        });

        expect(getApolloResponseErrorCode(res)).toBe('BAD_USER_INPUT');
      });

      it('should return error if email is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: _.omit(user, 'email'),
          },
        });

        expect(getApolloResponseErrorCode(res)).toBe('BAD_USER_INPUT');
      });

      it('should return user if name is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: _.omit(user, 'name'),
          },
        });

        expect(getRegistrationData(res)).toEqual(
          expect.objectContaining({ email: user.email, name: 'unknown' }),
        );
      });

      it('should return a user', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: user,
          },
        });

        expect(getRegistrationData(res)).toEqual(
          expect.objectContaining({ email: user.email, name: user.name }),
        );
        expect(res.header.authorization).toMatch(/^Bearer\s\S+/);
        expect(res.header['set-cookie'][0]).toMatch(/^session=.+/);
      });
    });
  });
});
