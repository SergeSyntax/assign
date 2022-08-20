import { CreateUserData, LoginData } from '@/common/types';

export const loginData: LoginData = {
  email: 'test@test.com',
  password: 'test',
};

export const createUserData: CreateUserData = {
  ...loginData,
  name: 'test',
};
