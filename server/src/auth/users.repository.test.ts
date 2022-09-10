import { usersRepository } from './users.repository';
import { createUserValidation } from './users.model';
import { registrationInput } from 'test/mock/users';

jest.mock('./users.model', () => {
  return {
    createUserValidation: {
      validate: jest.fn(),
    },
  };
});

describe('class usersRepository', () => {
  describe('create(data: RegistrationInput)', () => {
    it('should structure the query correctly', () => {
      const query = usersRepository.create(registrationInput).toQuery();

      expect(query).toMatchInlineSnapshot(
        `"insert into \\"users\\" as \\"u\\" (\\"email\\", \\"name\\", \\"password\\") values ('test@test.com', 'test', 'test') returning \\"id\\", \\"name\\", \\"email\\", \\"image\\", \\"createdAt\\", \\"updatedAt\\""`,
      );
    });

    it('should run validation on create', () => {
      usersRepository.create(registrationInput);

      expect(createUserValidation.validate).toBeCalledWith(registrationInput);
    });
  });

  describe('isEmailRegistered(email: string)', () => {
    it('should structure the query correctly', () => {
      const query = usersRepository.isEmailRegistered('test@test.com').toQuery();

      expect(query).toMatchInlineSnapshot(
        `"select EXISTS ((select * from \\"users\\" as \\"u\\" where \\"email\\" = 'test@test.com')) limit 1"`,
      );
    });
  });

  describe('findOne(where: Partial<User>)', () => {
    it('should structure the query correctly', () => {
      const query = usersRepository.findOne({ email: 'test@test.com' }).toQuery();
      expect(query).toMatchInlineSnapshot(
        `"select * from \\"users\\" as \\"u\\" where \\"email\\" = 'test@test.com' limit 1"`,
      );
    });
  });
});
