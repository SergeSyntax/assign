import winston from 'winston';
import { TransformableInfo } from 'logform';
import { AbstractConfigSetColors } from 'winston/lib/winston/config';
import { Env, isEnv } from '../config';

const enum LevelType {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  HTTP = 'http',
  DEBUG = 'debug',
}

export const levels = Object.freeze<winston.LoggerOptions['levels']>({
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

export const getLevelByEnv = (): winston.LoggerOptions['level'] => {
  // if env is production show info logs and above
  if (isEnv(Env.Production)) return LevelType.INFO;
  // if env is test show only error logs and above
  if (isEnv(Env.Test)) return LevelType.ERROR;
  // if env is development show all logs
  return LevelType.DEBUG;
};

const handleMessage = (message: string | number | object | null | undefined) =>
  typeof message === 'object' ? JSON.stringify(message, null, 2) : message;

export const format = ({ timestamp, level, message, stack }: TransformableInfo) =>
  Boolean(stack)
    ? `${timestamp} ${level}: ${handleMessage(message)}\n${stack}`
    : `${timestamp} ${level}: ${handleMessage(message)}`;

const { combine, timestamp, printf, colorize, errors } = winston.format;
const { File, Console } = winston.transports;

winston.addColors(colors);

export const Logger = winston.createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    colorize({ level: true }),
    printf(format),
  ),
  level: getLevelByEnv(),
  levels,
  transports: [
    new Console(),
    new File({ filename: 'logs/all.log' }),
    new File({
      filename: 'logs/error.log',
      level: 'error',
    }),
  ],
});
