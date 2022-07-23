import { transports } from 'winston';

jest.mock('../config/knex');
jest.mock('winston', () => {
  const returnArgs = (args: unknown) => args;

  return {
    format: {
      combine: jest.fn(returnArgs),
      timestamp: jest.fn(returnArgs),
      printf: jest.fn(returnArgs),
      colorize: jest.fn(returnArgs),
    },
    transports: {
      Console: jest.fn(),
      File: jest.fn(),
    },
    createLogger: jest.fn().mockReturnValue({
      warn: jest.fn(),
    }),
    addColors: jest.fn(),
  };
});

describe('logger', () => {
  it('should be configured', async () => {
    await import('./logger');
    expect(transports.Console).toBeCalledTimes(1);
    expect(transports.File).toBeCalledTimes(2);
  });
});
