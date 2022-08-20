import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  email_String_NotNull_minLength_1_maxLength_255_format_email: any;
  name_String_minLength_1_maxLength_255: any;
  password_String_NotNull_minLength_1_maxLength_255: any;
};

export type RegistrationInput = {
  email: Scalars['email_String_NotNull_minLength_1_maxLength_255_format_email'];
  name?: InputMaybe<Scalars['name_String_minLength_1_maxLength_255']>;
  password: Scalars['password_String_NotNull_minLength_1_maxLength_255'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registration: User;
};

export type MutationRegistrationArgs = {
  registrationInput: RegistrationInput;
};

export type Query = {
  __typename?: 'Query';
  profile: User;
};

export enum Role {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type RegistrationMutationVariables = Exact<{
  registrationInput: RegistrationInput;
}>;

export type RegistrationMutation = {
  __typename?: 'Mutation';
  registration: { __typename?: 'User'; id: string; name: string; email: string };
};

export const RegistrationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Registration' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'registrationInput' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'RegistrationInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registration' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registrationInput' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'registrationInput' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RegistrationMutation, RegistrationMutationVariables>;
