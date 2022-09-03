import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
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

export type LoginInput = {
  email: Scalars['email_String_NotNull_minLength_1_maxLength_255_format_email'];
  password: Scalars['password_String_NotNull_minLength_1_maxLength_255'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: User;
  registration: User;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegistrationArgs = {
  registrationInput: RegistrationInput;
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
};

export type RegistrationInput = {
  email: Scalars['email_String_NotNull_minLength_1_maxLength_255_format_email'];
  name?: InputMaybe<Scalars['name_String_minLength_1_maxLength_255']>;
  password: Scalars['password_String_NotNull_minLength_1_maxLength_255'];
};

export enum Role {
  Admin = 'ADMIN',
  Reviewer = 'REVIEWER',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MutationKeySpecifier = ('login' | 'registration' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	registration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('currentUser' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	currentUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'id' | 'name' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;