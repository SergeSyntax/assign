import winston from 'winston';
import { TransformableInfo } from 'logform';
import {
  colorizeOptions,
  colors,
  fileLogsOptions,
  getLevelByEnv,
  levels,
  timestampOptions,
} from 'src/config/logger';

const handleMessage = (message: string | number | object | null | undefined) =>
  typeof message === 'object' ? JSON.stringify(message, null, 2) : message;

export const format = ({ timestamp, level, message, stack }: TransformableInfo) =>
  Boolean(stack)
    ? `${timestamp} ${level}: ${handleMessage(message)}\n${stack}`
    : `${timestamp} ${level}: ${handleMessage(message)}`;

const { combine, timestamp, printf, colorize } = winston.format;
const { File, Console } = winston.transports;

const fileTransports = fileLogsOptions.map((fileOptions) => new File(fileOptions));

winston.addColors(colors);

export const Logger = winston.createLogger({
  format: combine(timestamp(timestampOptions), colorize(colorizeOptions), printf(format)),
  level: getLevelByEnv(),
  levels,
  transports: [new Console(), ...fileTransports],
});
