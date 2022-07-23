import { Logger, pool } from '@/common/utils';
import { DATABASE_NAME, rootKnexConfig } from '@/common/config';

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
