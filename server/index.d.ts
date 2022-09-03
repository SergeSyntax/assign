import 'jest-extended';
import { User as UserType } from 'src/auth/users.type';
import { Request as ExpressRequest } from 'passport';

// Overwrite bad declaration from @types/passport
declare module 'passport' {
  namespace Express {
    interface User extends UserType {}
  }
}
