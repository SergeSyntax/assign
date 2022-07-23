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
  const httpServer = await app.init();
  global.context = await Context.build(httpServer);
});
afterAll(() => global.context.close());

beforeEach(() => pool.knex.seed.run());
