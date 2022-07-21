import { createUserValidation } from 'src/models/users';
import { CreateUserData } from 'src/types/generated/graphql';
import { User } from 'src/types/user';
import { Repository } from 'src/utils/repository';
import { Validation } from 'src/utils/validation';

const returnedColumn: (keyof User)[] = [
  'id',
  'name',
  'email',
  'password',
  'createdAt',
  'updatedAt',
];

class UsersRepository extends Repository<User, CreateUserData> {
  constructor() {
    super({
      tableName: 'users',
      createValidation: createUserValidation,
    });
  }

  create(data: CreateUserData) {
    this.createValidation?.validate(data);
    return this.getBuilder().insert(data, ['id', 'name', 'email', 'role']);
  }

  isEmailRegistered(email: string) {
    const query = this.getBuilder().select('*').where({ email }).returning('email');
    return this.knex.first(this.knex.raw(`EXISTS (?)`, query));
  }
}

export const usersRepository = new UsersRepository();
