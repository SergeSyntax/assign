import { Knex } from 'knex';
import { pool } from './pool';

interface RepositoryConfig {
  readonly tableName: string;
  readonly tableAlias?: string;
}

const getTableAliasFromName = (name: string): string =>
  name
    .slice()
    .replace(/[^A-Z]/g, '')
    .toLowerCase() || name.charAt(0);

/**
 */
export abstract class Repository<T = any, S = any> {
  public get knex() {
    return pool.knex;
  }

  public get tableName(): string {
    return this.repositoryConfig.tableName;
  }

  public get tableAlias(): string {
    return this.repositoryConfig.tableAlias || getTableAliasFromName(this.tableName);
  }

  public get table() {
    return { [this.tableAlias]: this.tableName };
  }

  constructor(public repositoryConfig: RepositoryConfig) {}

  getBuilder(): Knex.QueryBuilder<T> {
    return this.knex(this.table);
  }
}
