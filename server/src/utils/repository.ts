import { Knex } from 'knex';
import { pool } from './pool';
import { Validation } from './validation';

interface RepositoryConfig<T, C> {
  readonly tableName: string;
  readonly tableAlias?: string;
  readonly createValidation?: Validation<C>;
  readonly updateValidation?: Validation<Partial<C>>;
}

const getTableAliasFromName = (name: string): string =>
  name
    .slice()
    .replace(/[^A-Z]/g, '')
    .toLowerCase() || name.charAt(0);

/**
 */
export abstract class Repository<T = any, C = any> {
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

  public get createValidation() {
    return this.repositoryConfig.createValidation;
  }

  public get updateValidation() {
    return this.repositoryConfig.updateValidation;
  }

  constructor(public repositoryConfig: RepositoryConfig<T, C>) {}

  getBuilder(): Knex.QueryBuilder<T> {
    return this.knex(this.table);
  }
}
