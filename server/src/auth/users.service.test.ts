// export const registration = async ({
//   email,
//   password,
//   name,
// }: CreateUserData): Promise<RegisterResolve> => {
//   const { exists: isUserExists } = await usersRepository.isEmailRegistered(email);
//   if (isUserExists) throw new UserInputError('the email address already in use');

//   const hashedPassword = await hash(password);
//   const [user] = await usersRepository.create({ email, name, password: hashedPassword });

//   return {
//     user,
//     token: signJWT(user),
//   };
// };

import { UserInputError } from 'apollo-server-core';
import { createUserData } from 'test/mock/users';
import { hash, signJWT } from './auth.utils';
import { usersRepository } from './users.repository';
import * as usersService from './users.service';

jest.mock('./auth.utils', () => ({
  hash: jest.fn((text: string) => text),
  signJWT: jest.fn(),
}));

jest.mock('./users.repository', () => ({
  usersRepository: {
    isEmailRegistered: jest.fn().mockResolvedValue({ exists: false }),
    create: jest.fn().mockImplementation((user) => Promise.resolve([user])),
  },
}));

describe('Users Service', () => {
  describe('registration', () => {
    it('should run create user process if email not registered', async () => {
      await usersService.registration(createUserData);
      expect(usersRepository.isEmailRegistered).toBeCalledWith(createUserData.email);
      expect(hash).toBeCalled();
      expect(usersRepository.create).toBeCalledWith(createUserData);
      expect(signJWT).toBeCalled();
    });

    it('should throw an email error if email already registered', async () => {
      (usersRepository.isEmailRegistered as jest.Mock).mockResolvedValueOnce({ exists: true });
      const handleUserServiceRegistration = () => usersService.registration(createUserData);
      await expect(handleUserServiceRegistration).rejects.toBeInstanceOf(UserInputError);
      expect(usersRepository.isEmailRegistered).toBeCalledWith(createUserData.email);
      expect(usersRepository.create).not.toBeCalledWith(createUserData);
      expect(hash).not.toBeCalled();
    });
  });
});
