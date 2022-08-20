import _ from 'lodash';
import { UserInputError } from 'apollo-server-core';
import { CreateUserData, LoginData, ResolversTypes } from '@/common/types';
import { hash, sign, compare } from './auth.utils';
import { usersRepository } from './users.repository';
import { User } from './users.type';

interface RegisterResolve {
  token: string;
  user: ResolversTypes['User'];
}

export const registration = async ({
  email,
  password,
  name,
}: CreateUserData): Promise<RegisterResolve> => {
  const { exists: isUserExists } = await usersRepository.isEmailRegistered(email);
  if (isUserExists) throw new UserInputError('the email address already in use');

  const hashedPassword = await hash(password);
  const [user]: User[] = await usersRepository.create({ email, name, password: hashedPassword });

  return {
    user: _.pick(user, ['id', 'name', 'email']),
    token: sign(user),
  };
};

export const login = async ({ email, password }: LoginData): Promise<RegisterResolve> => {
  const user: User = await usersRepository.findOne({ email });

  if (!user) throw new UserInputError('invalid credentials');

  const isPasswordValid = await compare(user?.password ?? '', password);
  if (!isPasswordValid) throw new UserInputError('invalid credentials');

  return {
    user: _.pick(user, ['id', 'name', 'email']),
    token: sign(user),
  };
};
