import { app } from './app';
import { Env } from './config/constants';
import { isEnv, PORT } from './config/environment';
import { knexConfig } from './config/knex';
import { handleProcessException } from './utils/errors/handle-process-exception';
import { Logger } from './utils/logger';
import { pool } from './utils/pool';

process.on('uncaughtException', handleProcessException);
process.on('unhandledRejection', handleProcessException);

async function startServer() {
  try {
    await pool.connect(knexConfig);
    const httpServer = await app.init();
    httpServer.listen(PORT, () => {
      Logger.info(`Listening on port ${PORT}`);
      if (isEnv(Env.Development))
        Logger.info(`Server ready at http://localhost:${PORT}${app.graphqlPath}`);
    });
  } catch (err) {
    handleProcessException(err);
  }
}

startServer();
