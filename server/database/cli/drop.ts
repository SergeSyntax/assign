import { DATABASE_NAME } from 'src/config/environment';
import { rootKnexConfig } from 'src/config/knex';
import { Logger } from 'src/utils/logger';
import { pool } from 'src/utils/pool';

async function dropDatabase() {
  try {
    await pool.connect(rootKnexConfig);
    await pool.query('DROP DATABASE %I', DATABASE_NAME);
    Logger.info(`database "${DATABASE_NAME}" dropped`);
    await pool.close();
  } catch (err) {
    Logger.error(`database "${DATABASE_NAME}" not exists`);
  }
}

dropDatabase();
