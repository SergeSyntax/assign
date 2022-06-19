import { Logger } from '../logger';

export const handleProcessException = (err: unknown) => {
  Logger.error(err);
  process.exit(1);
};
