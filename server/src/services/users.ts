import { UserInputError } from 'apollo-server-core';
import { createUserValidation } from 'src/models/users';
import { usersRepository } from 'src/repositories';
import { CreateUserData, ResolversTypes } from 'src/types/generated/graphql';
import { User } from 'src/types/user';
// import { generateJWTToken } from 'src/utils/encryption';
// import { Password } from 'src/utils/encryption';

export const registration = async (data: CreateUserData): Promise<ResolversTypes['User']> => {
  // createUserValidation.validate(data);

  const { email, password } = data;

  // const isUserExists = await usersRepository.getBuilder().where({ email }).select('email');
  // if (isUserExists) throw new UserInputError('the email address already in use');
  // const hashedPassword = await Password.toHash(password);

  // const { id, name, role } = await usersRepository
  //   .getBuilder()
  //   .insert({ ...data, password: hashedPassword })
  //   .returning(['id', 'name', 'role']);

  // const token = generateJWTToken({ id, role });

  return {
    id: 'test',
    name: 'test',
    email: 'test',
    token: 'test',
  };
};
