import { LoggerOptions } from 'winston';
import { AbstractConfigSetColors } from 'winston/lib/winston/config';
import { TimestampOptions, ColorizeOptions } from 'logform';
import { FileTransportOptions } from 'winston/lib/winston/transports';
import { Env } from './constants';
import { isEnv } from './environment';

const enum LevelType {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  DEBUG = 'debug',
}

export const levels = Object.freeze<LoggerOptions['levels']>({
  [LevelType.ERROR]: 0,
  [LevelType.WARN]: 1,
  [LevelType.INFO]: 2,
  [LevelType.HTTP]: 3,
  [LevelType.DEBUG]: 5,
});

export const colors = Object.freeze<AbstractConfigSetColors>({
  [LevelType.ERROR]: 'red',
  [LevelType.WARN]: 'yellow',
  [LevelType.INFO]: 'green',
  [LevelType.HTTP]: 'magenta',
  [LevelType.DEBUG]: 'white',
});

export const getLevelByEnv = (): LoggerOptions['level'] => {
  // if env is production show info logs and above
  if (isEnv(Env.Production)) return LevelType.INFO;
  // if env is test show only error logs and above
  if (isEnv(Env.Test)) return LevelType.ERROR;
  // if env is development show all logs
  return LevelType.DEBUG;
};

type FileLogsOptions = FileTransportOptions[];

export const timestampOptions: TimestampOptions = { format: 'YYYY-MM-DD HH:mm:ss:ms' };
export const colorizeOptions: ColorizeOptions = { level: true };
export const fileLogsOptions: FileLogsOptions = [
  { filename: 'logs/all.log' },
  {
    filename: 'logs/error.log',
    level: 'error',
  },
];
