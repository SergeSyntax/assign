/**
 * When you're writing tests, you often need to check that values meet certain conditions.
 * expect gives you access to a number of "matchers" that let you validate different things.
 * For additional Jest matchers maintained by the Jest Community check out jest-extended.
 * @link https://github.com/jest-community/jest-extended
 */
import { Server } from 'http';
import { pool } from '@/common/utils';
import { knexConfig } from '@/common/config';
import { app } from 'src/app';

export class Context {
  static async build(server: Server) {
    await pool.connect(knexConfig);
    return new Context(server);
  }
  constructor(public readonly server: Server) {}
  async close() {
    await pool.close();
    return this.server.close();
  }
}

declare global {
  var context: Context;
}

beforeAll(async () => {
  /**
   * Apollo Server uses a multi-step request pipeline to validate and execute incoming GraphQL operations.
   * This pipeline supports integration withcustom plugins at each step, which can affect an operation's
   * execution. Because of this, it's important to perform integration tests with a variety of operations
   * to ensure your request pipeline works as expected.
   * There are two main options for integration testing with Apollo Server:
   * > Using ApolloServer's executeOperation method.
   * > Setting up an HTTP client to query your server.
   *
   * @note at this project we going to use Setting up an HTTP client to save time
   * @link https://www.apollographql.com/docs/apollo-server/testing/testing
   */
  const httpServer = await app.init();
  global.context = await Context.build(httpServer);
});
afterAll(() => global.context.close());

beforeEach(async () => {
  await pool.knex.seed.run();
});
