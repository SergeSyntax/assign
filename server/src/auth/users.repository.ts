import { CreateUserData } from '@/common/types';
import { Repository } from '@/common/utils';
import { createUserValidation } from './users.model';
import { User } from './users.type';

class UsersRepository extends Repository<User, CreateUserData> {
  constructor() {
    super({
      tableName: 'users',
      createValidation: createUserValidation,
      returnedColumns: ['id', 'name', 'email', 'createdAt', 'updatedAt'],
    });
  }

  create(data: CreateUserData) {
    this.createValidation?.validate(data);
    return this.getBuilder().insert(data, this.returnedColum);
  }

  isEmailRegistered(email: string) {
    const query = this.getBuilder().select('*').where({ email }).returning('email');
    return this.knex.first(this.knex.raw(`EXISTS (?)`, query));
  }

  findOne(where: Partial<User>) {
    const query = this.getBuilder().where(where).first();
    return query;
  }
}

export const usersRepository = new UsersRepository();
