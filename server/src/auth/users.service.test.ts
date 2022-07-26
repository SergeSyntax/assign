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

import { createUserData } from 'test/mock/users';
import { usersRepository } from './users.repository';
import * as usersService from './users.service';

jest.mock('./users.repository', () => ({
  usersRepository: {
    isEmailRegistered: jest.fn().mockResolvedValue({ exists: false }),
    create: jest.fn().mockResolvedValue([{}]),
  },
}));

describe('Users Service', () => {
  describe('registration', () => {
    it('should call create user if isEmailRegistered false', async () => {
      await usersService.registration(createUserData);
      expect(usersRepository.isEmailRegistered).toBeCalledWith(createUserData.email);
      expect(usersRepository.create).toBeCalledWith(createUserData);
    });
  });
});
