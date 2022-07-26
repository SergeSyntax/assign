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
}

export const AUTH_HEADER = 'Authorization';
export const BEARER_PREFIX = 'Bearer';

const verifyJWT = promisify(jwt.verify) as any;

export const signJWT = ({ id, role }: User) =>
  jwt.sign({ sub: id, aud: role, iat: Date.now() }, SECRET, {
    expiresIn: '20d',
  });

export const decodeJWT = (jwt: string): JWTPayload => verifyJWT(jwt, SECRET);

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
    const [hashedPassword, salt] = storedPassword.split(':');

    crypto.scrypt(suppliedPassword, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('hex') === hashedPassword);
    });
  });
