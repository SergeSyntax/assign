// import { scrypt, randomBytes } from 'crypto';
// import { promisify } from 'util';
// import jwt, { verify } from 'jsonwebtoken';
// import { User } from 'src/types/generated/graphql';
// import { SECRET } from 'src/config/environment';

// const scryptAsync = promisify(scrypt);

// export class Password {
//   static async toHash(password: string) {
//     const salt = randomBytes(8).toString('hex');
//     const buf = (await scryptAsync(password, salt, 64)) as Buffer;

//     return `${buf.toString('hex')}.${salt}`;
//   }

//   static async compare(storedPassword: string, suppliedPassword: string) {
//     const [hashedPassword, salt] = storedPassword.split('.');
//     const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
//     return buf.toString('hex') === hashedPassword;
//   }
// }

// const verifyJWT = promisify(verify) as any;

// export const generateJWTToken = ({ id, role }: User) =>
//   jwt.sign({ sub: id, aud: role, iat: Date.now() }, SECRET, {
//     expiresIn: '20d',
//   });
