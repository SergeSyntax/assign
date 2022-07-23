import { DATABASE_NAME, rootKnexConfig } from '@/common/config';
import { pool } from '@/common/utils';

/**
 * Delete testing DB.
 */
export default async () => {
  await pool.connect(rootKnexConfig);
  await pool.query('DROP DATABASE %I', DATABASE_NAME);
  await pool.close();
};
