import { Knex } from 'knex';
import { Env } from '../config/constants';
import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_ROOT_CONNECTION,
  DATABASE_USERNAME,
  isEnv,
  NODE_ENV,
} from '../config/environment';
import { Logger } from '../utils/logger';

type KnexConfigBaseOnEnv = { [key in Env]: Knex.Config };
const { freeze } = Object;
const client = 'postgresql';

/**
 * use root knex config to create or remove database with available connection via
 * DATABASE_ROOT_CONNECTION env variable.
 */
export const rootKnexConfig = freeze<Knex.Config>({ client, connection: DATABASE_ROOT_CONNECTION });

const connection = freeze<Knex.PgConnectionConfig>({
  host: DATABASE_HOST,
  password: DATABASE_PASSWORD,
  user: DATABASE_USERNAME,
  port: Number.parseInt(DATABASE_PORT),
  database: DATABASE_NAME,
});

const migrations = freeze<Knex.MigratorConfig>({
  extension: 'ts',
  tableName: 'knex_migrations',
  directory: `database/migrations`,
});

const seeds = freeze<Knex.SeederConfig>({
  extension: 'ts',
  directory: `database/seeds`,
});

/**
 * @link https://github.com/vincit/tarn.js
 */
const pool = freeze<Knex.PoolConfig>({ min: 0, max: 10 });

const debug = ({ sql }) => Logger.debug(sql);

const DATABASE_CONFIG = freeze<Knex.Config>({
  client,
  connection,
  pool,
  migrations,
  seeds,
  debug: true,
  log: {
    warn: Logger.warn,
    error: Logger.error,
    deprecate: Logger.error,
    debug,
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

const config: KnexConfigBaseOnEnv = {
  [Env.Development]: DATABASE_CONFIG,
  [Env.Test]: DATABASE_CONFIG,
  [Env.Production]: DATABASE_CONFIG,
};
/**
 * use knexConfig for every operation in the application
 */
export const knexConfig: Knex.Config = config[NODE_ENV];
