import { app } from './app';
import { knexConfig } from './config/knex';
import { handleProcessError } from './utils/errors';
import { pool } from './utils/pool';

process.on('uncaughtException', handleProcessError);
process.on('unhandledRejection', handleProcessError);

async function startServer() {
  try {
    await pool.connect(knexConfig);
    await app.init();
    return app.listen();
  } catch (err) {
    handleProcessError(err);
  }
}

startServer();
