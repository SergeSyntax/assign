import { User } from 'src/types/user';
import { Repository } from 'src/utils/repository';

class UsersRepository extends Repository<User> {
  constructor() {
    super({
      tableName: 'users',
    });
  }
}

export const usersRepository = new UsersRepository();
