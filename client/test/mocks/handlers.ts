import { graphql } from 'msw';
import { faker } from '@faker-js/faker';
import { BASE_URL_APOLLO } from 'config/apollo/links';
import { MutationRegistrationArgs, RegistrationMutation } from 'src/generated';

const api = graphql.link(BASE_URL_APOLLO);

export const INVALID_MOCK_EMAIL = faker.internet.email();
export const MOCK_EMAIL = faker.internet.email();
export const MOCK_NAME = faker.name.firstName();
export const MOCK_PASSWORD = faker.company.name();

export const handlers = [
  graphql.mutation('Registration', async (req, res, ctx) => {
    const {
      registrationInput: { email, name },
    } = req.variables as MutationRegistrationArgs;

    if (email === INVALID_MOCK_EMAIL) {
      return res(
        ctx.delay(1),
        ctx.errors([
          {
            message: 'the email address already in use',
            path: ['registration'],
          },
        ]),
      );
    }

    return res(
      ctx.delay(1),
      ctx.data({
        registration: {
          id: '93c74b80-34ef-400d-8898-f93f0dc364da',
          name,
          email,
          __typename: 'User',
        } as RegistrationMutation['registration'],
      }),
    );
  }),
];
