import { graphql, GraphQLHandler } from 'msw';
import { faker } from '@faker-js/faker';
import { LoginMutation, LoginMutationVariables } from 'src/auth/login/login-form/login-form.gql';
import {
  RegistrationMutation,
  RegistrationMutationVariables,
} from 'src/auth/registration/registration-form/registration-form.gql';
import { REQUEST_MS_DELAY, ResponseResolver } from './common';
import { User } from 'src/common/apollo/types';

export const INVALID_MOCK_EMAIL = faker.internet.email();
export const MOCK_EMAIL = faker.internet.email();
export const MOCK_NAME = faker.name.firstName();
export const MOCK_PASSWORD = faker.company.name();
export const MOCK_USER_ID = faker.datatype.uuid();

const isValid = (email: string) => email !== INVALID_MOCK_EMAIL;

const user: User = {
  id: MOCK_USER_ID,
  name: MOCK_NAME,
  email: MOCK_EMAIL,
};

const registrationResponseResolver: ResponseResolver<RegistrationMutation, RegistrationMutationVariables> = (
  req,
  res,
  ctx,
) => {
  const { email } = req.variables.registrationInput;

  return res(
    ctx.delay(REQUEST_MS_DELAY),
    isValid(email)
      ? ctx.data({
          registration: user,
        })
      : ctx.errors([
          {
            message: 'the email address already in use',
            path: ['registration'],
          },
        ]),
  );
};

const loginResponseResolver: ResponseResolver<LoginMutation, LoginMutationVariables> = async (req, res, ctx) => {
  const { email } = req.variables.loginInput;

  return res(
    ctx.delay(REQUEST_MS_DELAY),
    isValid(email)
      ? ctx.data({
          login: user,
        })
      : ctx.errors([
          {
            message: 'invalid credentials',
            path: ['login'],
          },
        ]),
  );
};

export const authHandlers: GraphQLHandler[] = [
  graphql.mutation('Registration', registrationResponseResolver),
  graphql.mutation('Login', loginResponseResolver),
];
