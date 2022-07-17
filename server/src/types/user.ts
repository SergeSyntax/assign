import { Role } from './generated/graphql';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  password?: string;
  image?: string;
  provider?: string;
  createdAt: Date;
  updatedAt: Date;
}
