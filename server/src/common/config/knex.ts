import { Logger } from '../utils';
import { Knex } from 'knex';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_CLIENT,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_ROOT_CONNECTION,
  DATABASE_USERNAME,
  Env,
  isEnv,
  NODE_ENV,
} from './environment';

const DATABASE_CONFIG = Object.freeze<Knex.Config>({
  client: DATABASE_CLIENT,
  connection: {
    host: DATABASE_HOST,
    password: DATABASE_PASSWORD,
    user: DATABASE_USERNAME,
    port: Number.parseInt(DATABASE_PORT),
    database: DATABASE_NAME,
  },
  pool: { min: 0, max: 10 },
  migrations: {
    extension: 'ts',
    tableName: 'knex_migrations',
    directory: `database/migrations`,
  },
  seeds: {
    extension: 'ts',
    directory: `database/seeds`,
    timestampFilenamePrefix: true,
  },
  debug: isEnv(Env.Development),
  /**
   * @link https://github.com/vincit/tarn.js
   */
  log: {
    warn: (msg) => Logger.warn(msg),
    error: (msg) => Logger.error(msg),
    deprecate: (msg) => Logger.error(msg),
    debug: ({ sql, bindings }) => Logger.debug({ sql, bindings }),
  },
  /**
   * turn on stack trace capture for all query builders, raw queries and schema builders.
   * When a DB driver returns an error, this previously captured stack trace is thrown instead of a new one.
   * This helps to mitigate default behavior of await in node.js/V8
   * This has small performance overhead, so it is advised to use only for development. Turned off by default.
   * @link https://knexjs.org/#Installation-asyncStackTraces
   */
  asyncStackTraces: isEnv(Env.Development),
});

const config = Object.freeze<Record<Env, Knex.Config>>({
  [Env.Development]: DATABASE_CONFIG,
  [Env.Test]: DATABASE_CONFIG,
  [Env.Production]: DATABASE_CONFIG,
});

/**
 * use root knex config to create or remove database with available connection via
 * DATABASE_ROOT_CONNECTION env variable.
 */
export const rootKnexConfig = Object.freeze<Knex.Config>({
  client: DATABASE_CLIENT,
  connection: DATABASE_ROOT_CONNECTION,
});

/**
 * use knexConfig for every operation in the application
 */
export const knexConfig: Knex.Config = config[NODE_ENV];
