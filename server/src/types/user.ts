export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  provider?: string;
  createdAt: Date;
  updatedAt: Date;
}
