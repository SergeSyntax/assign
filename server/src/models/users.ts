import { CreateUserData } from 'src/types/generated/graphql';
import { Validation } from 'src/utils/validation';

// export const userSchema  = {
//   create:
// }

export const createUserValidation = new Validation<CreateUserData>({
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

export const updateUserValidation = new Validation<Partial<CreateUserData>>({
  type: 'object',
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
      nullable: true,
    },
    password: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
      nullable: true,
    },
  },
});
