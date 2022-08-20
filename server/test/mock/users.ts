import { RegistrationInput, LoginInput } from '@/common/types';

export const loginInput: LoginInput = {
  email: 'test@test.com',
  password: 'test',
};

export const registrationInput: RegistrationInput = {
  ...loginInput,
  name: 'test',
};
