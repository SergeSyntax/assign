import crypto from 'crypto';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { User } from 'src/types/user';
import { SECRET } from 'src/config/environment';
import { Role } from 'src/types/generated/graphql';

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
      return resolve(`${salt}:${derivedKey}`);
    });
  });

export const verify = async (password: string, hash: string) =>
  new Promise((resolve, reject) => {
    const [salt, key] = hash.split(':');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key == derivedKey.toString('hex'));
    });
  });
