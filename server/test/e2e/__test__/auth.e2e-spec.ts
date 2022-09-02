import _ from 'lodash';
import { gql } from 'apollo-server-core';
import {
  ApolloResponse,
  getApolloResponseData,
  getApolloResponseError,
  getApolloResponseErrorCode,
  getApolloResponseErrors,
  graphqlRequest,
} from '../test-graphql-utils';
import { registration } from 'src/auth/users.service';
import { User } from '@/common/types';
import { registrationInput, loginInput } from 'test/mock/users';
import { usersRepository } from 'src/auth/users.repository';
import { hash } from 'src/auth/auth.utils';

const BAD_USER_INPUT = 'BAD_USER_INPUT';

const getCookie = (res: ApolloResponse) => res.header['set-cookie'][0];
const getAuthHeader = (res: ApolloResponse) => res.header.authorization;

describe('auth', () => {
  describe('Mutation', () => {
    describe('registration(data: RegistrationInput!): User!', () => {
      const query = gql`
        mutation Mutation($registrationInput: RegistrationInput!) {
          registration(registrationInput: $registrationInput) {
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
            registrationInput: _.omit(registrationInput, 'password'),
          },
        });

        expect(getApolloResponseErrorCode(res)).toBe(BAD_USER_INPUT);
      });

      it('should return error if email is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            registrationInput: _.omit(registrationInput, 'email'),
          },
        });

        expect(getApolloResponseErrorCode(res)).toBe(BAD_USER_INPUT);
      });

      it('should return user if name is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            registrationInput: _.omit(registrationInput, 'name'),
          },
        });

        expect(getRegistrationRes(res)).toEqual(
          expect.objectContaining({ email: registrationInput.email, name: 'unknown' }),
        );
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });

      it('should return a user', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            registrationInput: registrationInput,
          },
        });

        expect(getRegistrationRes(res)).toEqual(
          expect.objectContaining({ email: registrationInput.email, name: registrationInput.name }),
        );
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });

      it('should throw email validation error if email already registered', async () => {
        await registration(registrationInput);

        const res = await graphqlRequest({
          query,
          variables: {
            registrationInput: registrationInput,
          },
        });
        const { extensions, message } = getApolloResponseError(res);
        expect(extensions.code).toBe(BAD_USER_INPUT);
        expect(message).toMatch(/^the email address already in use$/i);
      });
    });

    describe('login(loginInput: LoginInput!): User!', () => {
      const query = gql`
        mutation Login($loginInput: LoginInput!) {
          login(loginInput: $loginInput) {
            id
            name
            email
          }
        }
      `;

      const getLoginRes = (res: ApolloResponse) => getApolloResponseData<User>(res).login;
      const insertUser = async () => {
        const password = await hash(registrationInput.password);
        return usersRepository.create({
          email: registrationInput.email,
          password,
        });
      };

      it('should return error if password is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            loginInput: _.omit(loginInput, 'password'),
          },
        });

        expect(getApolloResponseData(res)).toBeNil();
        expect(getApolloResponseErrorCode(res)).toBe(BAD_USER_INPUT);
      });

      it('should return error if email is missing', async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            loginInput: _.omit(loginInput, 'email'),
          },
        });

        expect(getApolloResponseData(res)).toBeNil();
        expect(getApolloResponseErrorCode(res)).toBe(BAD_USER_INPUT);
      });

      it("should throw an error if a user if that email doesn't exist", async () => {
        const res = await graphqlRequest({
          query,
          variables: {
            loginInput: loginInput,
          },
        });

        expect(getApolloResponseData(res)).toBeNil();
        expect(getApolloResponseErrorCode(res)).toBe(BAD_USER_INPUT);
      });

      it("should throw an error if a user password didn't match", async () => {
        await insertUser();
        const INCORRECT_PASSWORD = 'incorrect_password';

        const res = await graphqlRequest({
          query,
          variables: {
            loginInput: { ...loginInput, password: INCORRECT_PASSWORD },
          },
        });

        expect(getApolloResponseData(res)).toBeNil();
        expect(getApolloResponseErrorCode(res)).toBe(BAD_USER_INPUT);
      });

      it("should throw an error if a user password didn't match", async () => {
        await insertUser();
        const res = await graphqlRequest({
          query,
          variables: {
            loginInput,
          },
        });
        expect(getLoginRes(res)).toEqual(expect.objectContaining({ email: loginInput.email }));
        expect(getApolloResponseErrors(res)).toBeNil();
        expect(getAuthHeader(res)).toMatch(/^Bearer\s\S+/);
        expect(getCookie(res)).toMatch(/^session=.+/);
      });
    });
  });
});
