import { CodegenConfig } from '@graphql-codegen/cli';
import { BASE_URL_APOLLO } from './api';

const codegenConfig: CodegenConfig = {
  schema: BASE_URL_APOLLO,
  documents: './src/**/*.graphql',
  config: {
    inputMaybeValue: 'T | undefined',
    maybeValue: 'T | undefined',
  },
  generates: {
    'src/common/apollo/types.ts': {
      plugins: ['typescript', 'typescript-apollo-client-helpers', 'fragment-matcher'],
      hooks: {
        afterAllFileWrite: ['eslint --fix', 'prettier --fix'],
      },
    },
    'src/': {
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
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
  overwrite: true,
  debug: false,
  verbose: false,
};

export default codegenConfig;
