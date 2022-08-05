/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginData, MutationStatus } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "UserPayload";
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface Login_login {
  __typename: "UserMutationResponse";
  status: MutationStatus;
  user: Login_login_user | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  loginData: LoginData;
}
