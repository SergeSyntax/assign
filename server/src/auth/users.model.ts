import { Validation } from '@/common/utils';
import { CreateUserPayload } from './users.type';

export const emailValidation = new Validation<string>({
  type: 'string',
  format: 'email',
  minLength: 1,
  maxLength: 255,
});

export const createUserValidation = new Validation<CreateUserPayload>({
  oneOf: [
    {
      type: 'object',
      required: ['email', 'password'],
      additionalProperties: false,
      properties: {
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
          nullable: true,
        },
        email: emailValidation.schema,
        password: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
        },
      },
    },
    {
      type: 'object',
      required: ['email', 'provider'],
      additionalProperties: false,
      properties: {
        email: emailValidation.schema,
        provider: {
          type: 'string',
        },
        image: {
          type: 'string',
          nullable: true,
          minLength: 1,
          maxLength: 255,
        },
        name: {
          type: 'string',
          nullable: true,
          minLength: 1,
          maxLength: 255,
        },
      },
    },
  ],
});

// export const updateUserValidation = new Validation<Partial<RegistrationInput>>({
//   type: 'object',
//   additionalProperties: false,
//   properties: {
//     name: {
//       type: 'string',
//       minLength: 1,
//       maxLength: 255,
//       nullable: true,
//     },
//     email: {
//       type: 'string',
//       format: 'email',
//       minLength: 1,
//       maxLength: 255,
//       nullable: true,
//     },
//     password: {
//       type: 'string',
//       minLength: 1,
//       maxLength: 255,
//       nullable: true,
//     },
//   },
// });
