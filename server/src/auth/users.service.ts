import _ from 'lodash';
import { UserInputError } from 'apollo-server-core';
import { RegistrationInput, LoginInput, ResolversTypes, Maybe } from '@/common/types';
import { hash, sign, compare, JWTPayload, verify } from './auth.utils';
import { usersRepository } from './users.repository';
import { User } from './users.type';
import { Logger } from '@/common/utils';
import { Request } from 'express';

interface RegisterResolve {
  token: string;
  user: ResolversTypes['User'];
}

export const registration = async ({
  email,
  password,
  name,
}: RegistrationInput): Promise<RegisterResolve> => {
  const { exists: isUserExists } = await usersRepository.isEmailRegistered(email);
  if (isUserExists) throw new UserInputError('the email address already in use');

  const hashedPassword = await hash(password);
  const [user] = await usersRepository.create({ email, name, password: hashedPassword });

  return {
    user: _.pick(user, ['id', 'name', 'email']),
    token: sign(user),
  };
};

export const login = async ({ email, password }: LoginInput): Promise<RegisterResolve> => {
  const user: User = await usersRepository.findOne({ email });

  if (!user) throw new UserInputError('invalid credentials');

  const isPasswordValid = await compare(user?.password ?? '', password);
  if (!isPasswordValid) throw new UserInputError('invalid credentials');

  return {
    user: _.pick(user, ['id', 'name', 'email']),
    token: sign(user),
  };
};

export const getUserFromJWT = async (jwt?: string): Promise<Maybe<User>> => {
  try {
    if (!jwt) return;
    const decoded = await verify(jwt);
    const user: User = await usersRepository.findOne({ id: decoded.sub });

    if (!user) return;
    if (new Date(decoded?.iat)?.getTime() <= user.updatedAt.getTime() - 1000) return;

    return user;
  } catch (error) {
    Logger.debug(error);
  }
};

const isBearerAuth = (token: string) => /^Bearer\s/.test(token);

export const handleAuthHeader = async (req: Request) => {
  // was authenticated via passport / cookie and not relevant
  if (req.user) return;

  // req.user
  const authHeader = req.header('Authorization') ?? '';
  // authenticate via header
  if (isBearerAuth(authHeader)) {
    const [, token] = authHeader.split(' ');
    req.user = await getUserFromJWT(token);
  }
};
