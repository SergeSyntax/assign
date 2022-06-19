import { DATABASE_NAME } from 'src/config/environment';
import { rootKnexConfig } from 'src/config/knex';
import { Logger } from 'src/utils/logger';
import { pool } from 'src/utils/pool';

async function createDatabase() {
  try {
    await pool.connect(rootKnexConfig);
    await pool.query('CREATE DATABASE %I', DATABASE_NAME);
    Logger.info(`database "${DATABASE_NAME}" created`);
    await pool.close();
  } catch (err) {
    Logger.error(`database "${DATABASE_NAME}" already exists`);
    process.exit(1);
  }
}

createDatabase();
