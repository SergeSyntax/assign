import { usersRepository } from './users.repository';
import { createUserValidation } from './users.model';
import { createUserData } from 'test/mock/users';

jest.mock('./users.model', () => {
  return {
    createUserValidation: {
      validate: jest.fn(),
    },
  };
});

describe('class usersRepository', () => {
  describe('create(data: CreateUserData)', () => {
    it('should structure the query correctly', () => {
      const query = usersRepository.create(createUserData).toQuery();

      expect(query).toMatchInlineSnapshot(
        `"insert into \\"users\\" as \\"u\\" (\\"email\\", \\"name\\", \\"password\\") values ('test@test.com', 'test', 'test') returning \\"id\\", \\"name\\", \\"email\\", \\"createdAt\\", \\"updatedAt\\""`,
      );
    });

    it('should run validation on create', () => {
      usersRepository.create(createUserData);

      expect(createUserValidation.validate).toBeCalledWith(createUserData);
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
});
