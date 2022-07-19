import { UserInputError } from 'apollo-server-core';
import { usersRepository } from 'src/repositories';
import { CreateUserData, ResolversTypes } from 'src/types/generated/graphql';
import { hash, signJWT } from 'src/utils/crypto';

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
  const [user] = await usersRepository.create({ email, name, password: hashedPassword });

  return {
    user,
    token: signJWT(user),
  };
};
