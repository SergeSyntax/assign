import { Logger, pool } from '@/common/utils';
import { DATABASE_NAME, rootKnexConfig } from '@/common/config';

async function dropDatabase() {
  try {
    await pool.connect(rootKnexConfig);
    await pool.query('DROP DATABASE %I', DATABASE_NAME);
    Logger.info(`database "${DATABASE_NAME}" dropped`);
    await pool.close();
  } catch (err) {
    Logger.error(`database "${DATABASE_NAME}" not exists`);
    process.exit(1);
  }
}

dropDatabase();
