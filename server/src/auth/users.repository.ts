import { Repository } from '@/common/utils';
import { createUserValidation } from './users.model';
import { CreateUserPayload, User } from './users.type';

class UsersRepository extends Repository<User, CreateUserPayload> {
  constructor() {
    super({
      tableName: 'users',
      createValidation: createUserValidation,
      returnedColumns: ['id', 'name', 'email', 'image', 'createdAt', 'updatedAt'],
    });
  }

  create(data: CreateUserPayload) {
    this.createValidation?.validate(data);
    return this.getBuilder().insert<string, User[]>(data, this.returnedColum);
  }

  isEmailRegistered(email: string) {
    const query = this.getBuilder().select('*').where({ email }).returning('email');
    return this.knex.first<any, { exists: boolean }>(this.knex.raw(`EXISTS (?)`, query));
  }

  findOne(where: Partial<User>) {
    const query = this.getBuilder().where(where).first<User>();
    return query;
  }
}

export const usersRepository = new UsersRepository();
