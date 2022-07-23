import _ from 'lodash';
import { gql } from 'apollo-server-core';
import {
  ApolloResponse,
  getApolloResponseData,
  getApolloResponseError,
  graphqlRequest,
} from '../test-graphql-utils';
import { registration } from 'src/auth/users.service';
import { User } from '@/common/types';

const BAD_USER_INPUT = 'BAD_USER_INPUT';

const user = {
  email: 'test@test.com',
  password: 'password',
  name: 'test',
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

const getCookie = (res: ApolloResponse) => res.header['set-cookie'][0];
const getAuthHeader = (res: ApolloResponse) => res.header.authorization;

describe('auth', () => {
  describe('Mutation', () => {
    describe('registration(data: CreateUserData!): User!', () => {
      const getRegistrationRes = (res: ApolloResponse) =>
        getApolloResponseData<User>(res).registration;
      it('should return error if password is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: _.omit(user, 'password'),
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it('should return error if email is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: _.omit(user, 'email'),
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it('should return user if name is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: _.omit(user, 'name'),
          },
        });

        expect(getRegistrationRes(res)).toEqual(
          expect.objectContaining({ email: user.email, name: 'unknown' }),
        );
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });

      it('should return a user', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            data: user,
          },
        });

        expect(getRegistrationRes(res)).toEqual(
          expect.objectContaining({ email: user.email, name: user.name }),
        );
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });

      it('should return a user', async () => {
        await registration(user);

        const res = await graphqlRequest({
          query,
          variables: {
            data: user,
          },
        });
        const { extensions, message } = getApolloResponseError(res);
        expect(extensions.code).toBe(BAD_USER_INPUT);
        expect(message).toMatch(/^the email address already in use$/i);
      });
    });
  });
});
