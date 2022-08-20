import { RegistrationInput } from '@/common/types/generated/graphql';
import { Validation } from '@/common/utils';

export const createUserValidation = new Validation<RegistrationInput>({
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
    email: {
      type: 'string',
      format: 'email',
      minLength: 1,
      maxLength: 255,
    },
    password: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
    },
  },
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
