import { app } from './app';
import { knexConfig } from '@/common/config';
import { Logger, pool } from '@/common/utils';

const handleProcessError = (err: unknown) => {
  Logger.error(err);
  process.exit(1);
};

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
