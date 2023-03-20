import { RegistrationInput, Role } from '@/common/types';
import { Knex } from 'knex';
import { User } from 'src/auth';
import { InsertAdmin } from 'src/auth/users.type';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').where({ role: Role.Admin }).del();

  // Inserts seed entries
  await knex('users').insert({
    email: 'test',
    password: 'test',
    role: Role.Admin,
    name: 'admin',
  });
}
