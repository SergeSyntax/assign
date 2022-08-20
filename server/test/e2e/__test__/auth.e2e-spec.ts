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
import { createUserData, loginData } from 'test/mock/users';
import { usersRepository } from 'src/auth/users.repository';
import { hash } from 'src/auth/auth.utils';

const BAD_USER_INPUT = 'BAD_USER_INPUT';

const getCookie = (res: ApolloResponse) => res.header['set-cookie'][0];
const getAuthHeader = (res: ApolloResponse) => res.header.authorization;

describe('auth', () => {
  describe('Mutation', () => {
    describe('registration(data: CreateUserData!): User!', () => {
      const query = gql`
        mutation Mutation($createUserData: CreateUserData!) {
          registration(createUserData: $createUserData) {
            id
            name
            email
          }
        }
      `;

      const getRegistrationRes = (res: ApolloResponse) =>
        getApolloResponseData<User>(res).registration;
      it('should return error if password is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            createUserData: _.omit(createUserData, 'password'),
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it('should return error if email is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            createUserData: _.omit(createUserData, 'email'),
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it('should return user if name is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            createUserData: _.omit(createUserData, 'name'),
          },
        });

        expect(getRegistrationRes(res)).toEqual(
          expect.objectContaining({ email: createUserData.email, name: 'unknown' }),
        );
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });

      it('should return a user', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            createUserData: createUserData,
          },
        });

        expect(getRegistrationRes(res)).toEqual(
          expect.objectContaining({ email: createUserData.email, name: createUserData.name }),
        );
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });

      it('should throw email validation error if email already registered', async () => {
        await registration(createUserData);

        const res = await graphqlRequest({
          query,
          variables: {
            createUserData: createUserData,
          },
        });
        const { extensions, message } = getApolloResponseError(res);
        expect(extensions.code).toBe(BAD_USER_INPUT);
        expect(message).toMatch(/^the email address already in use$/i);
      });
    });

    describe('login(loginData: LoginData!): User!', () => {
      const query = gql`
        mutation Login($loginData: LoginData!) {
          login(loginData: $loginData) {
            id
            name
            email
          }
        }
      `;

      const getLoginRes = (res: ApolloResponse) => getApolloResponseData<User>(res).login;
      const insertUser = async () => {
        const password = await hash(createUserData.password);
        return usersRepository.create({
          email: createUserData.email,
          password,
        });
      };

      it('should return error if password is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            loginData: _.omit(loginData, 'password'),
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it('should return error if email is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            loginData: _.omit(loginData, 'email'),
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it("should throw an error if a user if that email doesn't exist", async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            loginData: loginData,
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it("should throw an error if a user password didn't match", async () => {
        await insertUser();
        const INCORRECT_PASSWORD = 'incorrect_password';

        const res = await graphqlRequest({
          query,
          variables: {
            loginData: { ...loginData, password: INCORRECT_PASSWORD },
          },
        });

        expect(getApolloResponseError(res).extensions.code).toBe(BAD_USER_INPUT);
      });

      it("should throw an error if a user password didn't match", async () => {
        await insertUser();
        const res = await graphqlRequest({
          query,
          variables: {
            loginData,
          },
        });
        expect(getLoginRes(res)).toEqual(expect.objectContaining({ email: loginData.email }));
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });
    });
  });
});
