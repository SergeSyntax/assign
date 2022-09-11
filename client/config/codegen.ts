import { CodegenConfig } from '@graphql-codegen/cli';
import { BASE_URL_APOLLO } from './api';

const config: CodegenConfig = {
  overwrite: true,
  schema: BASE_URL_APOLLO,
  documents: './src/**/*.graphql',
  config: {
    inputMaybeValue: 'T | undefined',
    maybeValue: 'T | undefined',
  },
  debug: false,
  verbose: true,
  generates: {
    'src/common/apollo/types.ts': {
      plugins: ['typescript', 'typescript-apollo-client-helpers'],
      hooks: {
        afterAllFileWrite: ['eslint --fix', 'prettier --fix'],
      },
    },
    'src/': {
      preset: 'near-operation-file',
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        baseTypesPath: 'common/apollo/types.ts',
        extension: '.gql.tsx',
      },
      hooks: {
        afterAllFileWrite: ['eslint --fix', 'prettier --fix'],
      },
    },
    'src/common/apollo/graphql.schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
