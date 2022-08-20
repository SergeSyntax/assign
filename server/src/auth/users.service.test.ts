import { UserInputError } from 'apollo-server-core';
import _ from 'lodash';
import { registrationInput, loginInput } from 'test/mock/users';
import { compare, hash, sign } from './auth.utils';
import { usersRepository } from './users.repository';
import * as usersService from './users.service';

jest.mock('./auth.utils', () => ({
  hash: jest.fn((text: string) => text),
  sign: jest.fn(),
  compare: jest.fn().mockReturnValue(true),
}));

jest.mock('./users.repository', () => ({
  usersRepository: {
    isEmailRegistered: jest.fn().mockResolvedValue({ exists: false }),
    create: jest.fn().mockImplementation((user) => Promise.resolve([user])),
    findOne: jest.fn().mockImplementation((user) => Promise.resolve([user])),
  },
}));

describe('users.service', () => {
  describe('registration', () => {
    it('should run create user process if email not registered', async () => {
      await usersService.registration(registrationInput);
      expect(usersRepository.isEmailRegistered).toBeCalledWith(registrationInput.email);
      expect(hash).toBeCalled();
      expect(usersRepository.create).toBeCalledWith(registrationInput);
      expect(sign).toBeCalled();
    });

    it('should throw an email error if email already registered', async () => {
      (usersRepository.isEmailRegistered as jest.Mock).mockResolvedValueOnce({ exists: true });
      const handleUserServiceRegistration = () => usersService.registration(registrationInput);
      await expect(handleUserServiceRegistration).rejects.toBeInstanceOf(UserInputError);
      expect(usersRepository.isEmailRegistered).toBeCalledWith(registrationInput.email);
      expect(usersRepository.create).not.toBeCalledWith(registrationInput);
      expect(hash).not.toBeCalled();
    });
  });

  describe('login', () => {
    it('should run get user process if email is registered', async () => {
      await usersService.login(loginInput);

      expect(compare).toBeCalled();
      expect(sign).toBeCalled();
      expect(usersRepository.findOne).toBeCalledWith(_.omit(loginInput, 'password'));
    });

    it('should throw an error if user not found', async () => {
      (usersRepository.findOne as jest.Mock).mockResolvedValueOnce(undefined);
      const handleUserServiceRegistration = () => usersService.login(loginInput);
      await expect(handleUserServiceRegistration).rejects.toBeInstanceOf(UserInputError);

      expect(compare).not.toBeCalled();
      expect(sign).not.toBeCalled();
      expect(usersRepository.findOne).toBeCalledWith(_.omit(loginInput, 'password'));
    });

    it("should throw an error if the password don't match", async () => {
      (compare as jest.Mock).mockResolvedValueOnce(undefined);
      const handleUserServiceRegistration = () => usersService.login(loginInput);
      await expect(handleUserServiceRegistration).rejects.toBeInstanceOf(UserInputError);

      expect(compare).toBeCalledWith('', loginInput.password);
      expect(sign).not.toBeCalled();
      expect(usersRepository.findOne).toBeCalledWith(_.omit(loginInput, 'password'));
    });
  });
});
