import { UserInputError } from 'apollo-server-core';
import { createUserValidation } from 'src/models/users';
import { usersRepository } from 'src/repositories';
import { CreateUserData, ResolversTypes } from 'src/types/generated/graphql';
import { hash, signJWT } from 'src/utils/crypto';

export const registration = async (data: CreateUserData): Promise<ResolversTypes['User']> => {
  const { email, password } = data;

  const { exists: isUserExists } = await usersRepository.isEmailRegistered(email);
  if (isUserExists) throw new UserInputError('the email address already in use');

  const hashedPassword = await hash(password);
  const [user] = await usersRepository.create({ ...data, password: hashedPassword });

  const token = signJWT(user);

  return {
    ...user,
    token,
  };
};
