import { Logger } from './logger';

export const handleProcessError = (err: unknown) => {
  Logger.error(err);
  process.exit(1);
};
