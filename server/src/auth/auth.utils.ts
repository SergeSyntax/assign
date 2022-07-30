import crypto from 'crypto';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { Role } from '@/common/types';
import { User } from './users.type';
import { SECRET } from '@/common/config';

interface JWTPayload {
  sub: string;
  aud: Role;
  iat: Date;
  exp: Date;
}

export const AUTH_HEADER = 'Authorization';
export const BEARER_PREFIX = 'Bearer';
export const DAYS_TILL_EXPIRATION = 20;

const verifyJWT = promisify(jwt.verify) as any;

export const sign = ({ id, role }: Pick<User, 'id' | 'role'>) =>
  jwt.sign({ sub: id, aud: role, iat: Date.now() }, SECRET, {
    expiresIn: DAYS_TILL_EXPIRATION + 'd',
  });

export const verify = (jwt: string): Promise<JWTPayload> => verifyJWT(jwt, SECRET);

export const hash = (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(8).toString('hex');

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) return reject(err);
      const key = derivedKey.toString('hex');
      return resolve(`${salt}:${key}`);
    });
  });

export const compare = async (storedPassword: string, suppliedPassword: string) =>
  new Promise((resolve, reject) => {
    const [salt, hashedPassword] = storedPassword.split(':');

    crypto.scrypt(suppliedPassword, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('hex') === hashedPassword);
    });
  });
