import {
  timestampOptions,
  colorizeOptions,
  colors,
  levels,
  getLevelByEnv,
} from 'src/config/logger';

const returnArgs = (args: unknown) => args;

const mockAddColor = jest.fn();
const mockCreateLogger = jest.fn();
const mockConsoleTransports = jest.fn();
const mockFileTransports = jest.fn();
const mockFormat = {
  combine: jest.fn(returnArgs),
  timestamp: jest.fn(returnArgs),
  printf: jest.fn(returnArgs),
  colorize: jest.fn(returnArgs),
};

jest.mock('winston', () => {
  return {
    format: mockFormat,
    transports: {
      Console: mockConsoleTransports,
      File: mockFileTransports,
    },
    createLogger: mockCreateLogger,
    addColors: mockAddColor,
  };
});

describe('logger', () => {
  it('should be configured', async () => {
    const { format } = await import('../utils/logger');

    const { timestamp, colorize, printf, combine } = mockFormat;

    expect(mockConsoleTransports).toBeCalledTimes(1);
    expect(mockFileTransports).toBeCalledTimes(2);

    expect(mockAddColor).toHaveBeenLastCalledWith(colors);

    expect(combine).toHaveBeenLastCalledWith(
      timestamp(timestampOptions),
      colorize(colorizeOptions),
      printf(format),
    );

    expect(mockCreateLogger).toHaveBeenCalledWith(
      expect.objectContaining({ levels, level: getLevelByEnv() }),
    );
  });
});
