import {
  colorizeOptions,
  colors,
  fileLogsOptions,
  format,
  getLevelByEnv,
  levels,
  timestampOptions,
} from 'src/config/logger';
import winston from 'winston';

const { combine, timestamp, printf, colorize } = winston.format;
const { File, Console } = winston.transports;

const fileTransports = fileLogsOptions.map((fileOptions) => new File(fileOptions));

winston.addColors(colors);

export const logger = winston.createLogger({
  format: combine(timestamp(timestampOptions), colorize(colorizeOptions), printf(format)),
  level: getLevelByEnv(),
  levels,
  transports: [new Console(), ...fileTransports],
});
